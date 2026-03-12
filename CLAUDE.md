# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at http://localhost:3000
npm run build    # Production build (Turbopack)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Architecture

This is a Next.js 15 App Router project using React 19 and Tailwind CSS v4, bootstrapped with `create-next-app`. The name `nextjs15-auth` suggests authentication will be added.

- **`app/`** — App Router root. `layout.tsx` is the root layout (Geist fonts, global CSS). `app/page.tsx` is the home route.
- **`app/globals.css`** — Global styles; Tailwind CSS v4 is configured via `postcss.config.mjs` (uses `@tailwindcss/postcss`).
- **`next.config.ts`** — Next.js config (currently empty).
- **ESLint** — Flat config (`eslint.config.mjs`) extending `next/core-web-vitals` and `next/typescript`.

## Key Notes

- Turbopack is enabled for both `dev` and `build`.
- Tailwind CSS v4 syntax differs from v3 — use CSS `@import "tailwindcss"` and CSS variables instead of `tailwind.config.js`.
- No auth library is integrated yet; this is the starting point for adding one (e.g., Auth.js / NextAuth, Clerk, etc.).
