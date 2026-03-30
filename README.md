# Alice HomeTech Website
### alicehometech.com — Local Development Project

A clean, mobile-first, multilingual website for Alice — a personal AI assistant for seniors.

---

## Project Structure

```
alicehometech/
├── index.html              ← Root redirect (auto-detects browser language)
├── css/
│   └── style.css           ← Shared design system (all pages use this)
├── js/
│   └── nav.js              ← Shared nav/hamburger/language switcher logic
├── en/
│   ├── index.html          ← English home page
│   └── download.html       ← English download page
├── zh/
│   ├── index.html          ← Chinese (Simplified) home page
│   └── download.html       ← Chinese download page
├── ja/
│   ├── index.html          ← Japanese home page
│   └── download.html       ← Japanese download page
├── assets/
│   ├── images/             ← All images (download from CDN — see CONTENT-AUDIT.md)
│   ├── fonts/              ← Self-hosted fonts (optional future use)
│   └── icons/              ← Favicon, app icons
├── components/
│   └── nav-footer.html     ← Reference snippets for nav & footer
├── CONTENT-AUDIT.md        ← Parity checklist + image download list
└── README.md               ← This file
```

---

## How to Preview Locally

### Option 1 — VS Code Live Server (recommended)
1. Open the `alicehometech/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.LiveServer)
3. Right-click `en/index.html` → **Open with Live Server**
4. Browser opens at `http://127.0.0.1:5500/en/index.html`
5. Any file save auto-reloads the browser ✨

### Option 2 — Python (no install needed)
```bash
cd ~/workspace/alicehometech
python3 -m http.server 8080
# Open: http://localhost:8080/en/index.html
```

### Option 3 — Node.js
```bash
cd ~/workspace/alicehometech
npx serve .
# Open the URL shown in the terminal
```

---

## Pages

| URL (local)                   | Description                        |
|-------------------------------|------------------------------------|
| `/en/index.html`              | English home page                  |
| `/en/download.html`           | English download page              |
| `/zh/index.html`              | Chinese (Simplified) home page     |
| `/zh/download.html`           | Chinese download page              |
| `/ja/index.html`              | Japanese home page                 |
| `/ja/download.html`           | Japanese download page             |

---

## Design System Quick Reference

All design decisions live in `css/style.css`.

### Color Palette
| Token             | Value     | Usage                        |
|-------------------|-----------|------------------------------|
| `--cream`         | `#FBF7F2` | Page background              |
| `--cream-dark`    | `#F3EDE3` | Alternate section background |
| `--warm-border`   | `#E5DDD0` | All borders                  |
| `--text-primary`  | `#1A1714` | Headings                     |
| `--text-body`     | `#3D3731` | Body text                    |
| `--text-muted`    | `#7A6F65` | Secondary text, captions     |
| `--accent`        | `#2D7A5F` | Primary green (CTAs, links)  |
| `--accent-dark`   | `#1E5C47` | Hover states                 |
| `--accent-light`  | `#EAF5EF` | Light green backgrounds      |
| `--alert`         | `#B85C38` | Required field markers       |

### Typography
- **Headings:** Lora (serif) — warm, readable, trustworthy
- **Body:** Source Sans 3 — clean, comfortable at large sizes
- **Chinese pages:** Noto Serif SC / Noto Sans SC
- **Japanese pages:** Noto Serif JP / Noto Sans JP
- Base font size: 18px (scales down to 16px on mobile)

### Breakpoints
- Mobile: `< 480px`
- Tablet: `480px – 720px`
- Desktop: `> 720px`

### Key CSS Classes
| Class              | Usage                                      |
|--------------------|--------------------------------------------|
| `.container`       | Max-width centered wrapper (1080px)        |
| `.section`         | Standard vertical padding (4rem top/bottom)|
| `.section--alt`    | Alternate cream background                 |
| `.section--accent` | Light green background                     |
| `.btn--primary`    | Filled green button                        |
| `.btn--outline`    | Outlined green button                      |
| `.callout`         | Left-bordered quote block                  |
| `.stat-strip`      | Row of stat cards                          |
| `.features-list`   | Responsive feature card grid               |
| `.problem-grid`    | Problem cards with images                  |
| `.solution-grid`   | Solution items (image + text)              |

---

## Adding a New Page

1. Copy `en/index.html` as your template
2. Update `<html lang="">` and `<title>`
3. Update nav `class="active"` on the correct link
4. Update language switcher links
5. Update footer links if needed
6. Add page to this README

---

## Before Deploying

- [ ] Download all images locally (see CONTENT-AUDIT.md)
- [ ] Update all image `src` paths to local `../assets/images/...`
- [ ] Wire contact form to Formspree (`action="https://formspree.io/f/YOUR_ID"`)
  - Or use Netlify Forms: add `netlify` attribute to `<form>`
- [ ] Add real favicon to `assets/icons/favicon.ico` and link in `<head>`
- [ ] Test on real mobile devices (iOS Safari, Android Chrome)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) for performance check
- [ ] Set up Git version control:
  ```bash
  cd ~/workspace/alicehometech
  git init
  git add .
  git commit -m "Initial build of Alice HomeTech v2"
  ```
- [ ] Deploy to Netlify (free):
  1. Push to GitHub
  2. Connect repo at app.netlify.com
  3. Point alicehometech.com DNS to Netlify

---

## Future Features (Planned)

- **User login / accounts** — Senior profile + family member accounts
- **Forum / community** — Q&A for seniors and caregivers
- **Blog / news** — Health tips and Alice updates
- **Analytics** — Privacy-respecting (Plausible or Fathom, not Google Analytics)
- **PWA** — Make the site installable on mobile as a web app

---

## Tech Stack

| Layer        | Choice                     | Why                                    |
|--------------|----------------------------|----------------------------------------|
| Markup       | Plain HTML5                | Simple, fast, no build step needed     |
| Styles       | Plain CSS (custom props)   | Full control, zero dependencies        |
| Scripts      | Vanilla JS                 | Tiny footprint, no framework overhead  |
| Fonts        | Google Fonts (CDN)         | Lora, Source Sans 3, Noto CJK families |
| Local dev    | VS Code Live Server        | Instant reload, zero config            |
| Hosting      | Netlify (planned)          | Free tier, auto-deploy from Git, CDN   |
| Forms        | Netlify Forms / Formspree  | No backend needed                      |
| Version ctrl | Git + GitHub               | Standard, free, enables Netlify deploy |
