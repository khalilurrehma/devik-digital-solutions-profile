import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5173/";
const output = process.argv[3] || "DEVIK_DIGITAL_SOLUTIONS_PROFILE.pdf";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForSelector(".doc-page");

await page.evaluate(async () => {
  await document.fonts.ready;
  const images = Array.from(document.images);
  await Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve(true);
            return;
          }
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        })
    )
  );
});

const { width, height } = await page.evaluate(() => {
  const pages = Array.from(document.querySelectorAll(".doc-page"));
  const widths = pages.map((el) => el.getBoundingClientRect().width);
  const heights = pages.map((el) => el.getBoundingClientRect().height);
  return {
    width: Math.ceil(Math.max(...widths)),
    height: Math.ceil(Math.max(...heights)),
  };
});

await page.addStyleTag({
  content: `
    @page { size: ${width}px ${height}px; margin: 0; }
    .doc-page { break-after: page; }
    .doc-page:last-of-type { break-after: auto; }
  `,
});

await page.pdf({
  path: output,
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
});

await browser.close();
console.log(`Saved ${output}`);
