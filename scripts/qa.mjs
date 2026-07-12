// Gate 2 — QA adversarial. Sert out/ et cherche à casser chaque page.
// Preuves exécutées : overflow, h1 unique, alt, CTA (libellé/href/rel),
// reveals fail-open (reduced-motion), cibles ≥44px, landmarks, SEO (fetch brut HTML).
// Usage: node scripts/qa.mjs [accueil carte histoire professionnels]
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "out");
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg",
  ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon",
};
function server(dir) {
  return new Promise((resolve) => {
    const s = createServer(async (req, res) => {
      try {
        let p = decodeURIComponent((req.url || "/").split("?")[0]);
        if (p.endsWith("/")) p += "index.html";
        const fp = normalize(join(dir, p));
        if (!fp.startsWith(dir)) return res.writeHead(403).end();
        const body = await readFile(fp);
        res.writeHead(200, { "content-type": MIME[extname(fp)] || "application/octet-stream" }).end(body);
      } catch { res.writeHead(404).end("nf"); }
    });
    s.listen(0, "127.0.0.1", () => resolve(s));
  });
}

const PAGES = { accueil: "/", carte: "/carte/", histoire: "/histoire/", professionnels: "/professionnels/" };
const VPS = [360, 390, 768, 1024, 1440];
const findings = [];
const add = (page, sev, msg) => findings.push({ page, sev, msg });

async function auditPage(browser, base, key, urlPath) {
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  // Overflow horizontal sur tous les viewports.
  for (const w of VPS) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto(`${base}${urlPath}`, { waitUntil: "networkidle" }).catch(() => {});
    await page.waitForTimeout(200);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 1) add(key, "BLOQUANT", `débordement horizontal ${over}px @${w}`);
  }

  // Checks structurels @1440.
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}${urlPath}`, { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(200);
  const struct = await page.evaluate(() => {
    const r = {};
    r.h1 = document.querySelectorAll("h1").length;
    r.imgsNoAlt = Array.from(document.images).filter((i) => !i.getAttribute("alt") && i.getAttribute("alt") !== "").length;
    r.hasMain = !!document.querySelector("main");
    r.hasFooter = !!document.querySelector("footer");
    r.hasNav = !!document.querySelector("nav");
    r.skip = !!document.querySelector(".skip-link, a[href='#main']");
    // CTA WhatsApp
    const wa = Array.from(document.querySelectorAll("a")).filter((a) => (a.href || "").includes("wa.me/21629481736"));
    r.waCount = wa.length;
    r.waBadRel = wa.filter((a) => !((a.getAttribute("rel") || "").includes("noopener")) || a.target !== "_blank").length;
    r.waLabels = wa.map((a) => a.textContent.replace(/\s+/g, " ").trim());
    // petites cibles (liens/boutons visibles < 44px dans les deux dimensions, hors liens de texte inline)
    const controls = Array.from(document.querySelectorAll("a,button")).filter((el) => {
      const s = getComputedStyle(el);
      if (s.display === "none" || s.visibility === "hidden") return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
    r.tiny = controls.filter((el) => {
      const rect = el.getBoundingClientRect();
      const inlineText = el.tagName === "A" && !el.querySelector("svg,img,i") && rect.height < 30 && getComputedStyle(el).display.includes("inline");
      return !inlineText && (rect.height < 44 && rect.width < 44);
    }).length;
    return r;
  });
  if (struct.h1 !== 1) add(key, "BLOQUANT", `<h1> = ${struct.h1} (attendu 1)`);
  if (struct.imgsNoAlt > 0) add(key, "MAJEUR", `${struct.imgsNoAlt} image(s) sans alt`);
  if (!struct.hasMain || !struct.hasFooter || !struct.hasNav) add(key, "MAJEUR", `landmarks manquants main=${struct.hasMain} footer=${struct.hasFooter} nav=${struct.hasNav}`);
  if (struct.waBadRel > 0) add(key, "MAJEUR", `${struct.waBadRel} lien(s) WhatsApp sans target=_blank/rel=noopener`);
  const badLabel = struct.waLabels.filter((l) => l && !l.includes("Commander sur WhatsApp"));
  if (badLabel.length) add(key, "MINEUR", `libellé CTA WhatsApp inattendu: ${JSON.stringify(badLabel.slice(0, 2))}`);
  if (struct.tiny > 0) add(key, "MAJEUR", `${struct.tiny} cible(s) tactile(s) < 44px`);

  // Reveals fail-open sous reduced-motion : aucun élément .reveal ne doit rester à opacity 0.
  const rmCtx = await browser.newContext({ reducedMotion: "reduce" });
  const rmPage = await rmCtx.newPage();
  await rmPage.goto(`${base}${urlPath}`, { waitUntil: "networkidle" }).catch(() => {});
  await rmPage.waitForTimeout(300);
  const hidden = await rmPage.evaluate(() =>
    Array.from(document.querySelectorAll('[class*="reveal"]')).filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.99).length);
  if (hidden > 0) add(key, "BLOQUANT", `${hidden} bloc(s) reveal bloqué(s) opacity<1 en reduced-motion`);
  await rmCtx.close();

  await ctx.close();
}

function seoCheck(key, html) {
  const has = (re, sev, msg) => { if (!re.test(html)) add(key, sev, `SEO(HTML brut): ${msg}`); };
  has(/<title>[^<]+<\/title>/i, "MAJEUR", "<title> absent");
  has(/property="og:title"/i, "MAJEUR", "og:title absent");
  has(/property="og:image"/i, "MAJEUR", "og:image absent");
  has(/og-image\.jpg/i, "MAJEUR", "og:image ne pointe pas vers og-image.jpg");
  has(/name="twitter:card"/i, "MINEUR", "twitter:card absent");
  has(/rel="canonical"/i, "MAJEUR", "canonical absent");
}

async function main() {
  if (!existsSync(OUT_DIR)) { console.error("out/ absent — build d'abord."); process.exit(2); }
  const requested = process.argv.slice(2).filter((a) => PAGES[a]);
  const keys = requested.length ? requested : Object.keys(PAGES);
  const s = await server(OUT_DIR);
  const base = `http://127.0.0.1:${s.address().port}`;
  const browser = await chromium.launch();
  for (const key of keys) {
    const urlPath = PAGES[key];
    await auditPage(browser, base, key, urlPath);
    const htmlPath = join(OUT_DIR, urlPath === "/" ? "index.html" : `${urlPath}index.html`);
    try { seoCheck(key, await readFile(htmlPath, "utf8")); }
    catch { add(key, "BLOQUANT", `HTML statique introuvable: ${htmlPath}`); }
  }
  await browser.close();
  s.close();

  const order = { BLOQUANT: 0, MAJEUR: 1, MINEUR: 2 };
  findings.sort((a, b) => order[a.sev] - order[b.sev]);
  console.log("\n=== GATE 2 — findings ===");
  if (!findings.length) console.log("Aucun finding. 0 bloquant.");
  for (const f of findings) console.log(`[${f.sev}] ${f.page.padEnd(15)} ${f.msg}`);
  const blockers = findings.filter((f) => f.sev === "BLOQUANT").length;
  console.log(`\nTotal: ${findings.length} findings, ${blockers} bloquant(s).`);
  process.exit(blockers > 0 ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });
