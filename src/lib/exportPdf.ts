export function exportToPdf() {
  const message = [
    "For high-quality PDF (no layout loss), use the headless export:",
    "",
    "1) Start the dev server: npm run dev",
    "2) In another terminal run: npm run export:pdf",
    "",
    "This uses headless Chrome to generate a crisp PDF.",
  ].join("\n");

  // eslint-disable-next-line no-alert
  alert(message);
}
