# Handoff — Dundul Raptenling Monastery Website

Onboarding guide for the incoming frontend developer. Read it once end-to-end before starting.

- **Live:** https://dundulraptenling.org (and .com) · Firebase mirror: https://monastery-web.web.app
- **Repo:** https://github.com/dukmank/MonasteryWeb
- **The web app lives in the `site/` folder** (not the repo root).
- **Stack:** React 18 + Vite 5 + React Router 6 · Firebase (Firestore + Auth + Hosting) · Cloudinary (images/PDFs) · Tailwind (Play CDN) · bilingual EN/Tibetan.

---

## 1. What is being handed over (checklist)

### A. Source code
- [x] Code is on GitHub: **https://github.com/dukmank/MonasteryWeb** — invite the dev as a collaborator (Settings → Collaborators).
- [ ] Send the real **`site/.env`** file over a secure channel (password manager / encrypted message) — it is **not** in git. See `site/.env.example` for the required variables.

### B. Accounts & access to grant (share credentials over a secure channel, never in the repo)
- [ ] **Firebase Console** (project `monastery-web`): invite the dev's email to the project (Editor/Owner) for deploys + Firestore/Auth access.
- [ ] **Cloudinary** (cloud `dvhwombxw`): account for uploading images/PDFs. Note the unsigned preset `monastery_unsigned` and the "Allow delivery of PDF and ZIP files" setting must stay ON.
- [ ] **Web3Forms**: account holding the contact-form access key (emails go to admin@dundulraptenling.org).
- [ ] **GoDaddy**: only needed for DNS/domain work. *Note: the domain and the old WordPress hosting live in TWO different GoDaddy accounts* — a frontend dev normally won't need this.
- [ ] **CMS admin login**: the email/password used to sign in at `/admin` (Firebase Auth). See section 4.C for how to add a new admin correctly.

### C. Reference material (design sources are NOT in the repo — too large)
- In the repo: `CLAUDE.md` (working rules, auto-loaded by Claude Code), the `*.xlsx` files (content/menu + per-page SEO source of truth), and this `HANDOFF.md`.
- **Shared separately (via Drive, not committed):** original design images, HTML prototypes (`Design+HTML/`), and magazine PDFs. The site's final images/PDFs are already hosted on Cloudinary, so these sources are reference-only.

---

## 2. Project overview

```
MonasteryWeb/
├─ CLAUDE.md              # working rules (auto-loaded by Claude Code)
├─ HANDOFF.md             # this file
├─ *.xlsx                 # Website Data / SEO / Link Audit — content source of truth
└─ site/                  # ★ the whole web app
   ├─ index.html          # <head>, default SEO/OG meta, Tailwind Play CDN + inline token config
   ├─ firebase.json       # Hosting config (site: monastery-web) + headers + trailingSlash
   ├─ firestore.rules     # Firestore permissions + admin UID allowlist
   ├─ .env / .env.example # env vars (Firebase / Cloudinary / Web3Forms)
   ├─ .claude/launch.json # dev-server config for the Claude Code browser preview
   ├─ scripts/prerender.mjs  # SEO prerender after build (puppeteer-core)
   ├─ public/             # sitemap.xml, robots.txt, static assets
   └─ src/
      ├─ App.jsx          # all routes declared here
      ├─ pages/           # 31 pages (Home, About, VajraMasters, Magazine, …)
      ├─ components/      # 6 shared components (Layout, PageBanner, …)
      ├─ admin/           # schema-driven CMS admin — see 4.C
      ├─ data/            # static data (e.g. masters.js — lineage-master bios)
      └─ lib/             # firebase.js, cloudinary.js, i18n.jsx, seo.js, translations/
```

---

## 3. Run locally (5 minutes)

Requirements: **Node 18+** and **Google Chrome** installed (Chrome is needed for the prerender/build step).

```bash
git clone git@github.com:dukmank/MonasteryWeb.git
cd MonasteryWeb/site
cp .env.example .env      # then fill in values (or use the .env you were sent)
npm install
npm run dev               # http://localhost:5173
```

Other commands:
```bash
npm run build             # production build → dist/ (runs prerender afterwards)
npm run preview           # preview the build at http://localhost:4173
```

---

## 4. Architecture & key concepts (read carefully)

### A. Routing
- SPA; routes declared in `src/App.jsx`. Public routes are wrapped in `<Layout>`; admin routes `/admin/*` are separate.

### B. Bilingual EN / Tibetan (i18n)
- Mechanism: a **DOM translator** (`src/lib/i18n.jsx`) walks text nodes and swaps them to Tibetan using a dictionary.
- Dictionary: the `src/lib/translations/*.js` files are **auto-merged** (glob). To add a new UI string, add an `"English": "Tibetan"` pair to one of those files (the key must **exactly** match the displayed English text).
- ⚠️ **Testing gotcha:** the translator uses `requestAnimationFrame`, which is paused when the tab is hidden/backgrounded. In automated/headless (backgrounded) testing the Tibetan may appear "unchanged" → that's a **test-environment artifact, not a bug**. In a real browser (visible tab) translation works fine.

### C. CMS admin (dynamic content)
- `/admin` — the monastery staff manage News, Gallery, Magazine, Publications, Puja Books, etc.
- **Schema-driven:** collections/fields are declared in `src/admin/collections.js`. Adding a field there automatically adds it to the admin form + the saved document — no other code changes needed. Field types: `text | textarea | select | image | images | pdf | url | bool | date`; `bilingual: true` also stores `<field>_bo` (Tibetan).
- Content is stored in **Firestore**; images/PDFs are uploaded to **Cloudinary**.
- **Admin permission = a UID allowlist in `firestore.rules`.** To add a new admin:
  1. Create the user in Firebase Auth (Console).
  2. Add their UID to the array in `firestore.rules` (the `isAdmin()` function).
  3. `firebase deploy --only firestore:rules`.

### D. Images & PDFs (Cloudinary)
- Helpers in `src/lib/cloudinary.js`: `cld()` adds `f_auto,q_auto`; `uploadImage()` (compresses) and `uploadFile()` (PDFs, no compression).
- **Limit:** the unsigned preset only accepts files ≤ **10MB**. Resize/compress large source images first (e.g. `sips -Z 2400 -s format jpeg input.png --out out.jpg`).
- Image references in the code point directly to Cloudinary URLs.

### E. SEO & prerender
- Default meta (title/OG/Twitter/JSON-LD) is in `site/index.html`. **Per-page** meta is set by the `<Seo>` component (data in `src/lib/seo.js`, sourced from `Website - SEO.xlsx`).
- Because it's an SPA, `scripts/prerender.mjs` runs **after every `npm run build`** (`postbuild`): it uses the machine's Chrome to render all routes to static HTML, so Google/Facebook/Zalo read the correct per-page title/description/content.
- ⚠️ **Chrome is required at build time.** Without Chrome, prerender is skipped (the build still succeeds) but per-page SEO is lost → **always build & deploy from a machine that has Chrome.**
- `public/sitemap.xml` + `public/robots.txt` must be updated when adding/removing pages.

### F. Tailwind
- Uses **Tailwind Play CDN** (a `<script>` tag in `index.html`) plus color/spacing **token config inline in `index.html`** — there is NO `tailwind.config.js` and NO PostCSS. Utility classes work at runtime. To add a color/font token, edit the config block in `index.html`.

---

## 5. Deploy

```bash
cd site
npm run build
firebase deploy --only hosting              # → site monastery-web → dundulraptenling.org/.com
# When changing permissions:
firebase deploy --only firestore:rules
```

- Requires `firebase-tools` (`npm i -g firebase-tools`) and `firebase login` (an account with access to the project).
- ⚠️ The project has a second Hosting site named **`dundul-old-mirror`** — a static copy of the old WordPress site (kept for content comparison). **Do not deploy over it.** `firebase.json` pins `site: monastery-web`, so `firebase deploy --only hosting` only touches the real site.

---

## 6. Gotchas to remember (summary)

| Issue | Remember |
|---|---|
| Tibetan "not translating" during tests | Hidden tab pauses rAF. Works in a real browser. |
| Build loses SEO | The build machine must have Chrome (prerender). |
| Image upload fails | Files > 10MB → resize/compress before uploading to Cloudinary. |
| Puja/Magazine PDF won't open | Enable "Allow delivery of PDF and ZIP files" in Cloudinary Security. |
| New admin can't access /admin | Add their UID to `firestore.rules` + deploy rules. |
| Wrong deploy target | `firebase.json` pins the real site; don't touch `dundul-old-mirror`. |
| Changing menu / static content | Follow `Website Data.xlsx`; dynamic content goes through `/admin`. |

---

## 7. Set up Claude Code (for the new dev)

This project was built with **Claude Code**. The repo already ships `CLAUDE.md` (working rules) and `.claude/launch.json` (to preview the site in a browser pane). Lean on them.

### Install & run
1. **Option 1 — Desktop app (recommended, has the browser pane):** download Claude at https://claude.ai/download → open the **Code** tab → **Open folder** and point it at your `MonasteryWeb/` clone.
   **Option 2 — CLI:** `npm install -g @anthropic-ai/claude-code` → run `claude` inside the repo.
2. Sign in with an Anthropic account (**Pro/Max**, or an API key). Frontend work is token-heavy → a Max plan hits limits less often.
3. `CLAUDE.md` auto-loads each session. `.claude/launch.json` already defines the dev server (`npm run dev`, port 5173) → just ask Claude to "run the site and show me" and it opens the preview.

### Tips for this repo
- Work **inside the `site/` folder** (that's where the code is).
- Ask Claude to verify with the browser preview (reading DOM/console) instead of guessing.
- Remind it: **only deploy when asked** (no auto-deploy).
- Type `/help` for commands; `/plugin` to browse & install plugins/skills.

---

## 8. Recommended plugins / MCP / skills for web work

> To add an MCP server: `claude mcp add <name> -- <command>` (double-check with `claude mcp --help`, since syntax can change between versions). For plugins/skills: type `/plugin` to open the marketplace inside Claude Code.

### MCP servers (most valuable for frontend)
- **Context7** — pulls the **latest** React/Vite/Tailwind/Firebase docs right while coding (avoids outdated code):
  `claude mcp add context7 -- npx -y @upstash/context7-mcp`
- **Playwright** — drives a browser to test user flows / E2E / capture states:
  `claude mcp add playwright -- npx -y @playwright/mcp@latest`
- **Firebase (experimental)** — operate Firestore/Hosting/Auth from Claude:
  `claude mcp add firebase -- npx -y firebase-tools@latest experimental:mcp`
  *(experimental feature of firebase-tools; check its README if the syntax changes.)*

*Note:* the desktop app **already includes a browser pane** (view/QA the site inside Claude), so if you only need to "look at the site" you don't need Playwright; Playwright is for writing/running automated tests.

### Skills / plugins (type `/plugin` to browse the marketplace, then install)
- **code-review** — reviews the diff/PR for bugs before merging (built into Claude Code, run `/code-review`).
- A **frontend / design-review & QA** skill set from the marketplace — catches UI issues, spacing, contrast, responsiveness. Worth it for a multi-page site like this.
- **skill-creator** (Anthropic skills) — if you want to package a repeated workflow into your own team skill.

> Suggestion: browse `/plugin`, search for "review", "frontend", "test", "design"; install one or two that fit and expand from there — don't install everything at once.

---

## 9. Open items / handoff notes
- **Magazine – Volume IV (2023):** the PDF is missing; upload it via `/admin` when available.
- The **old WordPress site** is running at `dundul-old-mirror.web.app` for content comparison only — it can be deleted when no longer needed (`firebase hosting:sites:delete dundul-old-mirror`).
- **Security hardening (done by the owner in the consoles, not in code):** restrict the Cloudinary preset (formats/size), enable hCaptcha for Web3Forms, restrict the Firebase API key by HTTP referrer / enable App Check, and set a strong admin password.
- **Accounts/credentials** (GoDaddy, Firebase, Cloudinary, CMS admin): hand these over separately via a secure channel — **never** commit them to the repo.
