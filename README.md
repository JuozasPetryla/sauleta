# Saulėta

Production Next.js migration of [sauletasvente.com](https://sauletasvente.com/). The project contains the public Lithuanian site, localized media, pricing, supplier PDFs, articles, responsive layouts, SEO metadata, sitemap, and robots configuration.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
npm start
```

The application targets Node.js 24, which is supported by Hostinger's managed Node.js hosting.

## Hostinger deployment

The recommended deployment method is GitHub integration:

1. Push this directory to a GitHub repository. Do not commit `node_modules` or `.next`.
2. In hPanel, choose **Add Website** → **Deploy Web App** → **Import Git Repository**.
3. Select this repository and choose **Next.js** if framework detection does not select it automatically.
4. Select Node.js `24.x`.
5. Use `npm run build` as the build command and `npm start` as the start command.
6. No environment variables are required for the current site.
7. Deploy and inspect the Hostinger preview before switching the production domain.

Hostinger also accepts a ZIP upload. Include the source, `package.json`, and `package-lock.json`, but exclude `node_modules` and `.next`.

## Content maintenance

- Shared navigation, contact details, and image collections: `data/site.ts`
- Page content and metadata: `app/<route>/page.tsx`
- Global responsive design: `app/globals.css`
- Original media and supplier PDFs: `public/media`
- Locally hosted fonts: `public/fonts`

Run `npm run build` after content or dependency updates. Package prices should be rechecked against the business's current pricing before every production release.
