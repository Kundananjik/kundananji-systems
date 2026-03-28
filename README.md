# Kundananji Portfolio Website

Production-ready portfolio website built with Vite, React, and Tailwind CSS.

## Live Site

- https://kundananji.42web.io/

## Tech Stack

- Vite
- React
- Tailwind CSS

## Features

- Fully static site (no backend runtime)
- Mobile-responsive layout
- Project showcase:
  - EduTrack Attendance System
  - Revenue Management System
  - BroilerTrack Management System
- Skills section by domain
- Certifications & Technical Training section (grouped by category and status)
- Contact section with email, phone, GitHub, and LinkedIn
- SEO setup:
  - Canonical URL
  - Open Graph + Twitter tags
  - JSON-LD structured data
  - `robots.txt` and `sitemap.xml`

## Project Structure

```text
.
├─ public/
│  ├─ favicon.png
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

Build output is generated in `dist/` with relative asset paths for static hosting.

## Deployment (InfinityFree)

1. Run `npm run build`
2. Upload contents of `dist/` to InfinityFree `htdocs/`
3. Confirm:
   - `https://kundananji.42web.io/`
   - `https://kundananji.42web.io/robots.txt`
   - `https://kundananji.42web.io/sitemap.xml`

## Search Console

- Property: `https://kundananji.42web.io/`
- Sitemap: `https://kundananji.42web.io/sitemap.xml`

## Contact

- Email: `kundananjisimukonda@gmail.com`
- Phone: `+260971863462`
- GitHub: https://github.com/Kundananjik
- LinkedIn: https://www.linkedin.com/in/kundananjisimukonda
