// Screenshot QA: node scripts/shoot.mjs <baseUrl> <outDir> <path1> [path2 ...]
// Captures full-page screenshots at 1440 and 375 widths and reports horizontal overflow + console errors.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [base, out, ...paths] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const widths = (process.env.WIDTHS ?? "1440,375").split(",").map(Number);

for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  for (const p of paths) {
    errors.length = 0;
    const res = await page.goto(base + p, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const h1 = await page.locator("h1").count();
    const name = `${p.replace(/[/?=]/g, "_") || "_home"}-${w}.png`;
    await page.screenshot({ path: `${out}/${name}`, fullPage: true });
    console.log(`${w} ${p} status=${res?.status()} overflowX=${overflow} h1=${h1} errors=${errors.length ? errors.slice(0, 3).join(" | ") : 0}`);
  }
  await ctx.close();
}
await browser.close();
