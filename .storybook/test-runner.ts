import type { TestRunnerConfig } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

/**
 * Tests visuels de régression (CLAUDE.md §3).
 * Snapshot de CHAQUE story sur plusieurs viewports.
 * Lancer sur les 3 moteurs : test-storybook --browsers chromium firefox webkit
 * Baselines committées ; diff pixel = échec.
 */
const VIEWPORTS = [
  { name: "360", width: 360, height: 800 },
  { name: "390", width: 390, height: 844 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 768 },
  { name: "1440", width: 1440, height: 900 },
];

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Attendre fonts + images avant capture (fidélité).
    await page.evaluate(async () => {
      await (document as Document).fonts.ready;
      const imgs = Array.from(document.images);
      await Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((res) => {
                img.onload = res;
                img.onerror = res;
              }),
        ),
      );
    });

    const browserName =
      page.context().browser()?.browserType().name() ?? "chromium";

    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(120);
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: `tests/__snapshots__/${browserName}`,
        customSnapshotIdentifier: `${context.id}--${vp.name}`,
        failureThreshold: 0.01,
        failureThresholdType: "percent",
      });
    }
  },
};

export default config;
