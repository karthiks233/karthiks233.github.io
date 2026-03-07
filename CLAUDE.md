# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (Vite)
npm run build     # Type-check with tsc, then bundle with Vite
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

## Architecture

**Stack:** React 19 + TypeScript + Vite, deployed via GitHub Actions to GitHub Pages at `karthiks233.github.io`.

**Single-page layout:** `src/App.tsx` renders all sections sequentially — `Navbar`, `Hero`, `About`, `Experience`, `Projects`, `Contact`, `Footer`. There is no client-side routing; navigation uses anchor links with `scroll-behavior: smooth`.

**Styling:** One global stylesheet at `src/index.css` handles all component styling with plain CSS and BEM-like class names. No CSS modules or utility frameworks. Responsive breakpoints at 1400px, 1200px (switches to hamburger nav), and 600px.

**Static assets:** Images and the resume PDF live in `public/assets/` and are referenced via paths like `./assets/filename`. The `legacy_backup/` directory contains the original vanilla HTML/CSS/JS site and is not part of the build.

**Deployment:** Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages. Vite `base` is set to `'/'`.
