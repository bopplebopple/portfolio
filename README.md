# Matthew Munandar — Portfolio

A single-page developer portfolio for **Matthew Brian Khoe Munandar**, Back-End Engineer.
Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4** — designed
mobile-first and ready to deploy on **Vercel**.

## Tech stack

- [Next.js 15](https://nextjs.org) — App Router, `next/font`, `next/image`
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Zero runtime UI dependencies — animations are CSS + a tiny `IntersectionObserver` hook

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## ⚠️ Add your photo

The hero uses `public/profile.jpg`. A generated gradient placeholder ships in its place.

1. Save your portrait as **`public/profile.jpg`** (replace the placeholder).
2. A square crop around **1000×1000** looks best in the rounded hero frame.
3. If your photo comes out sideways, rotate it upright before saving
   (e.g. `sips -r 90 public/profile.jpg` rotates 90° clockwise).

## Editing content

All written content lives in [`lib/content.ts`](lib/content.ts) — the single source of
truth (profile, experience, skills, education, contact). Update that one file and every
section reflects the change.

## Project structure

```
app/
  layout.tsx      # metadata, fonts, global background
  page.tsx        # section composition + JSON-LD
  globals.css     # design tokens + animations
  icon.svg        # favicon (MM monogram)
components/        # Nav, Hero, About, Experience, Skills, Education, Contact, Footer
lib/content.ts    # all content
public/profile.jpg # your portrait (replace the placeholder)
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js.
3. Deploy. No environment variables required.

(Optional) Update `metadataBase` in [`app/layout.tsx`](app/layout.tsx) to your real domain
for correct Open Graph / canonical URLs.
