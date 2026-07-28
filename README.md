# KD & Vishnavi — Wedding Invitation

Premium static wedding invitation site built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons. No backend or database — ready for Vercel or Netlify.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Edit a single file:

```
src/lib/wedding.ts
```

Update couple names, date, invite copy, events, venue, gallery paths, family, RSVP contacts, and share URLs.

## Assets

| Path | Purpose |
|------|---------|
| `public/images/` | Hero, venue, gallery, OG image |
| `public/music/wedding-theme.mp3` | Optional background music |

Replace placeholder images with your photos (keep the same filenames, or update paths in `wedding.ts`).

Add your song as `public/music/wedding-theme.mp3`. The music button appears bottom-right; if the file is missing, playback simply fails silently.

## Deploy

### Vercel

```bash
npm run build
```

Or connect the repo in the [Vercel dashboard](https://vercel.com). Static export is enabled (`output: "export"`).

### Netlify

- Build command: `npm run build`
- Publish directory: `out`

Or drop the `out` folder after a local build.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production static export → `out/` |
| `npm run start` | Serve production build (after build) |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/                 # App Router layout, page, styles
  components/
    sections/          # Hero, countdown, invite, events, venue…
    ui/                # FadeIn, glass cards, headings
  lib/
    wedding.ts         # ← all editable content
    utils.ts           # countdown + share helpers
public/
  images/
  music/
```

## Notes

- RSVP opens WhatsApp with a prefilled message (static site friendly).
- Gallery includes a keyboard-accessible lightbox (Esc / arrows).
- SEO meta tags and Open Graph image are configured in `layout.tsx` from `wedding.ts`.
