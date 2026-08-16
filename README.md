# Andrew Zhang Portfolio

Personal portfolio site built with Vite, React, and TypeScript.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Use these settings (Vercel usually auto-detects them):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

No environment variables are required for the current setup.

## Project structure

- `src/data/resume.ts` — portfolio content
- `src/components/` — page sections and UI
- `public/` — static assets
