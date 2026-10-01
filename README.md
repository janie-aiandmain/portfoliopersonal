# Janie Solinski-Ruddy Portfolio — Cloudflare Workers Static Assets

This site is built as a static multi-page portfolio for Cloudflare Workers Static Assets. No CMS or database is required.

## Local preview

```bash
npm install
npm run dev
```

## Deploy

```bash
npx wrangler login
npm run deploy
```

Cloudflare will upload the `public/` directory as static assets. The project uses `404-page` routing and automatic HTML handling.

## Custom domain

After deployment, open the Worker in Cloudflare Dashboard and add a Custom Domain under the Worker's settings.

## Editing content

All pages are plain HTML in `public/`. Shared styling is in `public/assets/styles.css`. Navigation markup is duplicated in the static HTML output for simplicity and reliability.

## Notes

- The portrait was cropped from the existing portfolio screenshot provided by Janie.
- The resume PDF is stored in `public/assets/`.
- Public-service committee references use FSBA (Florida School Boards Association): AI & Emerging Technology Committee, Advocacy Committee, and Leadership Committee.
