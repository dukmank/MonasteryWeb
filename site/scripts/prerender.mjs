// Prerender static routes to real HTML so non-JS crawlers (Google without
// rendering, and social-preview bots: Facebook, Zalo, Twitter, LinkedIn) see
// the correct per-page <title>/description and page content.
//
// Runs after `vite build` (see the "postbuild" npm script). Serves the built
// dist/ with `vite preview`, loads each route in headless Chrome, waits for
// React + <Seo/> to run, and writes the rendered HTML back into dist/.
// Degrades gracefully (skips) if Chrome isn't available.

import { spawn } from "node:child_process";
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

import { PAGE_SEO } from "../src/lib/seo.js";
import { MASTERS } from "../src/data/masters.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const PORT = 4183;
const ORIGIN = `http://localhost:${PORT}`;

const CHROME_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
].filter(Boolean);

async function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    try { await access(p); return p; } catch { /* keep looking */ }
  }
  return null;
}

// Build the route list: every static SEO page + every master detail page.
function routes() {
  const set = new Set(Object.keys(PAGE_SEO));
  for (const m of MASTERS) {
    if (m.groups.includes("vajra")) set.add(`/vajra-masters/${m.slug}`);
    if (m.groups.includes("president")) set.add(`/presidents/${m.slug}`);
  }
  return [...set];
}

function outFile(route) {
  if (route === "/") return join(DIST, "index.html");
  return join(DIST, route.replace(/^\//, ""), "index.html");
}

function waitForServer(url, tries = 60) {
  return new Promise((res, rej) => {
    const tick = async (n) => {
      try {
        const r = await fetch(url);
        if (r.ok) return res();
      } catch { /* not up yet */ }
      if (n <= 0) return rej(new Error("preview server did not start"));
      setTimeout(() => tick(n - 1), 500);
    };
    tick(tries);
  });
}

async function main() {
  const chrome = await findChrome();
  if (!chrome) {
    console.warn("[prerender] No Chrome found — skipping prerender (SPA still works).");
    return;
  }

  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    { cwd: resolve(__dirname, ".."), stdio: "ignore" }
  );

  let browser;
  try {
    await waitForServer(ORIGIN);
    browser = await puppeteer.launch({
      executablePath: chrome,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const list = routes();
    let ok = 0;
    for (const route of list) {
      const page = await browser.newPage();
      try {
        await page.goto(ORIGIN + route, { waitUntil: "networkidle2", timeout: 30000 });
        // Wait for the app to mount and <Seo/> to update the head.
        await page.waitForFunction(
          () => document.querySelector("#root")?.children.length > 0,
          { timeout: 15000 }
        );
        await new Promise((r) => setTimeout(r, 400));
        const html = await page.content();
        const file = outFile(route);
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, html, "utf8");
        ok++;
        console.log(`[prerender] ${route} -> ${file.replace(DIST, "dist")}`);
      } catch (e) {
        console.warn(`[prerender] FAILED ${route}: ${e.message}`);
      } finally {
        await page.close();
      }
    }
    console.log(`[prerender] done: ${ok}/${list.length} routes`);
  } finally {
    if (browser) await browser.close();
    preview.kill("SIGTERM");
  }
}

main().catch((e) => {
  console.error("[prerender] error:", e);
  process.exit(1);
});
