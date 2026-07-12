// Gate 1 — harness de convergence visuelle.
// Rend chaque page candidate (out/) ET la référence Claude Design v2
// (standalone_export/Site Amore Mio v2.html) aux mêmes viewports, puis
// calcule un ratio de pixels concordants (pixelmatch, tolérance AA) sur des
// captures downscalées (sharp) pour rester rapide. Score page = MIN viewports.
// Usage: node scripts/convergence.mjs [accueil carte histoire professionnels]
import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { chromium } from "@playwright/test";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "out");
const REF_DIR = join(ROOT, "standalone_export");
const RESULT_DIR = join(ROOT, "tests/convergence");
const CMP_WIDTH = 720; // largeur de comparaison (downscale pour vitesse)
const GATE1_MIN = 90; // seuil de convergence de design (.claude/qa.harness.json)

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8", ".jsx": "text/babel; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon",
};

function staticServer(dir) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        let path = decodeURIComponent((req.url || "/").split("?")[0].split("#")[0]);
        if (path.endsWith("/")) path += "index.html";
        const filePath = normalize(join(dir, path));
        if (!filePath.startsWith(dir)) return res.writeHead(403).end();
        res.writeHead(200, { "content-type": MIME[extname(filePath)] || "application/octet-stream" });
        res.end(await readFile(filePath));
      } catch {
        res.writeHead(404).end("not found");
      }
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

const VIEWPORTS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "1024", width: 1024, height: 800 },
  { name: "768", width: 768, height: 1024 },
  { name: "390", width: 390, height: 844 },
];

const PAGES = {
  accueil: { refHash: "#/", cand: "/" },
  carte: { refHash: "#/carte", cand: "/carte/" },
  histoire: { refHash: "#/histoire", cand: "/histoire/" },
  professionnels: { refHash: "#/professionnels", cand: "/professionnels/" },
};

async function waitImages(page) {
  await page.evaluate(async () => {
    // Scroll complet pour déclencher les images loading="lazy", puis retour en haut.
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y);
        y += Math.round(window.innerHeight * 0.9);
        if (y < document.body.scrollHeight + window.innerHeight) setTimeout(step, 40);
        else { window.scrollTo(0, 0); setTimeout(res, 150); }
      };
      step();
    });
    await (document.fonts ? document.fonts.ready : Promise.resolve());
    // Attente des images, plafonnée (les lazy hors-champ ne bloquent pas).
    await Promise.race([
      Promise.all(Array.from(document.images).map((img) => (img.complete ? null : new Promise((r) => { img.onload = r; img.onerror = r; })))),
      new Promise((r) => setTimeout(r, 4000)),
    ]);
  });
}

async function shootAt(page, vp) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.waitForTimeout(300);
  await waitImages(page);
  // Neutralise les zones photo (ré-encodées par le pipeline perf) : Gate 1 mesure
  // la convergence de DESIGN (layout/typo/couleur), pas la fidélité JPEG↔WebP.
  // visibility:hidden conserve la mise en page (hauteurs inchangées).
  await page.addStyleTag({ content: "img{visibility:hidden!important}" });
  await page.waitForTimeout(60);
  return page.screenshot({ fullPage: true, animations: "disabled", caret: "hide" });
}

// Downscale à CMP_WIDTH, retourne {data(RGBA), width, height}.
async function toRaw(buf) {
  const img = sharp(buf).resize({ width: CMP_WIDTH });
  const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

function sliceTo(raw, h) {
  return raw.data.subarray(0, raw.width * h * 4);
}

async function main() {
  const requested = process.argv.slice(2).filter((a) => PAGES[a]);
  const pages = requested.length ? requested : Object.keys(PAGES);
  if (!existsSync(OUT_DIR)) { console.error("out/ absent — build d'abord."); process.exit(2); }
  await mkdir(RESULT_DIR, { recursive: true });

  const candServer = await staticServer(OUT_DIR);
  const refServer = await staticServer(REF_DIR);
  const candBase = `http://127.0.0.1:${candServer.address().port}`;
  const refBase = `http://127.0.0.1:${refServer.address().port}`;
  const refDoc = `${refBase}/${encodeURIComponent("Site Amore Mio v2.html")}`;

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 1, reducedMotion: "reduce" });
  const refPage = await ctx.newPage();
  const candPage = await ctx.newPage();

  await refPage.goto(`${refDoc}#/`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await refPage.evaluate(async () => {
    const r = document.getElementById("root");
    for (let i = 0; i < 200 && (!r || r.childElementCount === 0); i++) await new Promise((x) => setTimeout(x, 100));
  });
  console.log("référence prête.");

  const report = {};
  for (const pageKey of pages) {
    const { refHash, cand } = PAGES[pageKey];
    report[pageKey] = { viewports: {}, score: 100 };
    await refPage.evaluate((h) => { window.location.hash = h; }, refHash);
    await refPage.waitForTimeout(400);
    await candPage.goto(`${candBase}${cand}`, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
    await candPage.waitForTimeout(200);
    for (const vp of VIEWPORTS) {
      const [refBuf, candBuf] = [await shootAt(refPage, vp), await shootAt(candPage, vp)];
      const [refRaw, candRaw] = [await toRaw(refBuf), await toRaw(candBuf)];
      const w = CMP_WIDTH;
      const h = Math.min(refRaw.height, candRaw.height);
      const diff = new PNG({ width: w, height: h });
      // threshold 0.2 = concordance VISUELLE (absorbe le bruit de ré-encodage
      // webp q80 vs jpg original et l'anti-aliasing des polices, qui ne sont pas
      // des divergences de design) ; garde les vraies diff. de couleur/position.
      const mismatch = pixelmatch(sliceTo(refRaw, h), sliceTo(candRaw, h), diff.data, w, h, {
        threshold: 0.2, includeAA: true, alpha: 0.3,
      });
      const pct = (1 - mismatch / (w * h)) * 100;
      await writeFile(join(RESULT_DIR, `${pageKey}-${vp.name}-diff.png`), PNG.sync.write(diff));
      report[pageKey].viewports[vp.name] = {
        convergence: +pct.toFixed(2), refHeight: refRaw.height, candHeight: candRaw.height,
      };
      report[pageKey].score = Math.min(report[pageKey].score, pct);
      console.log(`  ${pageKey} @${vp.name}: ${pct.toFixed(2)}% (h ref/cand ${refRaw.height}/${candRaw.height})`);
    }
    report[pageKey].score = +report[pageKey].score.toFixed(2);
  }

  await browser.close();
  candServer.close();
  refServer.close();
  await writeFile(join(RESULT_DIR, "report.json"), JSON.stringify(report, null, 2));

  console.log("\n=== CONVERGENCE (score page = min viewports) ===");
  for (const [k, v] of Object.entries(report)) {
    const parts = Object.entries(v.viewports).map(([vp, r]) => `${vp}:${r.convergence}%`).join("  ");
    console.log(`${v.score >= GATE1_MIN ? "PASS" : "FAIL"}  ${k.padEnd(15)} score=${v.score}%  | ${parts}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
