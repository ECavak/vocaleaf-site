# vocaleaf-site

Public legal/support site for the Vocaleaf iOS app (Vite + React + TypeScript, English/Turkish).

## Develop
```sh
npm install
npm run dev
npm run build
```

## Deploy
Push to `main`. In the GitHub repo set Settings > Pages > Source to "GitHub Actions"; `.github/workflows/deploy.yml` builds and deploys with `actions/deploy-pages`.

## URLs (HashRouter, base `/vocaleaf-site/`)
- https://ecavak.github.io/vocaleaf-site/ (Home)
- https://ecavak.github.io/vocaleaf-site/#/privacy
- https://ecavak.github.io/vocaleaf-site/#/support
- https://ecavak.github.io/vocaleaf-site/#/terms

Language: toggle in the header (English default; remembered in the browser). Text lives in `src/content.tsx`.
Replace the App Store placeholder (`APP_STORE_URL`) in `src/content.tsx` once the app is live.
