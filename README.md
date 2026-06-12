# Liaqat Haseeb Travel & Tours — Website Recreation

A pixel-close React + Vite recreation of https://liaqathaseebtravels.lovable.app

## Tech Stack
- React 18
- Vite 5
- Plain CSS (one global stylesheet, CSS variables)
- No Tailwind, Redux, Context, or extra libraries

## Project Structure
```
src/
├── App.jsx
├── main.jsx
├── styles/
│   └── global.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Stats.jsx
    ├── Packages.jsx
    ├── WhyChooseUs.jsx
    ├── SpiritualJourney.jsx
    ├── Testimonials.jsx
    ├── FAQ.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Getting Started

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Images / Assets
This build currently links to Unsplash placeholder images for:
- Hero background (Kaaba)
- Spiritual Journey background (elderly pilgrim)
- Madinah card image
- Luxury suite card image

To use the original site's exact images:
1. Download the original images:
   - https://liaqathaseebtravels.lovable.app/assets/hero-kaaba-CGeNrqk2.jpg
   - https://liaqathaseebtravels.lovable.app/assets/spiritual-B-DULUDM.jpg
   - https://liaqathaseebtravels.lovable.app/assets/madinah-TJIjooQu.jpg
   - https://liaqathaseebtravels.lovable.app/assets/luxury-suite-lNMXNYhs.jpg
2. Place them in `src/assets/`
3. Import them in the relevant component and use the imported variable as the `src`, e.g.:
   ```jsx
   import heroImg from '../assets/hero-kaaba.jpg'
   ...
   <img src={heroImg} alt="..." />
   ```

## Editing Content
All text content (packages, FAQs, testimonials, why-choose-us cards, stats) is defined as
simple arrays at the top of each component file — edit these arrays directly to change content.

All colors, fonts, and spacing variables live at the top of `src/styles/global.css` under
`:root`.

## Deployment

### Vercel
1. Push this project to a GitHub repository.
2. Import the repo at https://vercel.com/new
3. Framework preset: Vite (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

### Netlify
1. Push this project to a GitHub repository.
2. New site from Git at https://app.netlify.com
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

### GitHub Pages
1. In `vite.config.js`, set `base` to `/your-repo-name/` (already set to `'./'` for relative
   paths, which works for most static hosts including GitHub Pages without changes).
2. Run `npm run build`.
3. Push the contents of `dist/` to a `gh-pages` branch, or use a GitHub Action / the
   `gh-pages` npm package to automate this:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
   Then run:
   ```bash
   npm run deploy
   ```
4. Enable GitHub Pages in the repo settings, pointing to the `gh-pages` branch.

## Notes
- Mobile navigation uses a simple hamburger toggle (no external icon library — pure CSS bars).
- FAQ accordion uses basic `useState` per component (no global state).
- The floating WhatsApp button is fixed at the bottom-right, matching the original.
