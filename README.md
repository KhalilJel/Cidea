# Cidea

**Digital Experience Studio**

Cidea builds distinctive digital flagships for ambitious businesses.

> Complexity underneath. Simplicity on the surface.

## Experience

The site is designed as one continuous digital experience rather than a collection of conventional sections.

Core principles:

* Purposeful motion
* Strong visual hierarchy
* Premium editorial direction
* Responsive interaction
* Accessibility and reduced motion support
* Performance first

## Stack

* React 19
* Vite
* GSAP ready motion architecture
* Lucide React
* CSS driven visual system
* GitHub Pages deployment

## Project structure

```
src/
  main.jsx
  styles.css

public/
  demos/
    aura/
    noir/
    northline/
  404.html
  robots.txt
  sitemap.xml

.github/
  workflows/
    deploy.yml
```

## Featured experiences

* **Cidea Studio** — digital experience studio
* **AURA** — premium aesthetic and dental clinic
* **NOIR HOUSE** — luxury hospitality
* **NORTHLINE** — architecture and construction

The demo experiences are self contained under `public/demos/` and are linked from the main portfolio.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

The `main` branch is built and deployed to GitHub Pages through GitHub Actions.

The current public deployment is:

https://khaliljel.github.io/Cidea/

## Conversion and analytics

Primary interactions emit events through a provider neutral `window.dataLayer` layer. This keeps the experience ready for an analytics provider without coupling the site to a specific vendor.

Tracked interaction categories include navigation, project opens, primary CTAs, enquiry starts and full experience opens.

## Contact

Project enquiries are currently prepared through the site's contact flow and sent to:

**hello@cidea.studio**

## Status

The core experience, portfolio demos, responsive behavior, accessibility foundations, metadata, sitemap, robots file, branded 404 and GitHub Pages deployment are implemented.

Custom domain configuration, production analytics provider setup and final art direction assets remain external launch tasks.
