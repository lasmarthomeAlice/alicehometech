# Alice HomeTech — Content Parity Audit

Last updated: 2026-03-28
Status key: ✅ Done | ⚠️ Needs review | ❌ Missing

---

## Home Page (index.html)

| Section              | EN | ZH | JA | Notes |
|----------------------|----|----|-----|-------|
| Page `<title>`       | ✅ | ✅ | ✅  | |
| Meta description     | ✅ | ✅ | ✅  | |
| Nav links            | ✅ | ✅ | ✅  | |
| Hero tagline         | ✅ | ✅ | ✅  | |
| Hero title           | ✅ | ✅ | ✅  | |
| Hero subtitle        | ✅ | ✅ | ✅  | |
| Hero CTAs            | ✅ | ✅ | ✅  | |
| Features section (6) | ✅ | ✅ | ✅  | |
| Problem section (4)  | ✅ | ✅ | ✅  | |
| Surgeon General quote| ✅ | ✅ | ✅  | |
| Aging world stats    | ✅ | ✅ | ⚠️  | JA: no stat strip, uses list only — add stats |
| Challenges list (10) | ✅ | ✅ | ✅  | |
| Solution grid (6)    | ✅ | ✅ | ✅  | |
| Download preview     | ✅ | ✅ | ✅  | |
| Contact form         | ✅ | ✅ | ✅  | |
| Footer               | ✅ | ✅ | ✅  | |

---

## Download Page (download.html)

| Section              | EN | ZH | JA | Notes |
|----------------------|----|----|-----|-------|
| Page `<title>`       | ✅ | ✅ | ✅  | |
| Hero                 | ✅ | ✅ | ✅  | |
| Box version section  | ✅ | ✅ | ✅  | |
| Mobile version section| ✅ | ✅ | ✅  | |
| Setup steps (4 each) | ✅ | ✅ | ✅  | |
| System requirements  | ✅ | ✅ | ✅  | |
| Need help CTA        | ✅ | ✅ | ✅  | |
| Footer               | ✅ | ✅ | ✅  | |

---

## Images — To Download Locally

Run this to replace external CDN URLs with local paths once downloaded:

### From img1.wsimg.com (GoDaddy CDN)
| Filename (local)           | Original URL |
|----------------------------|--------------|
| `senior-tv.jpeg`           | `https://img1.wsimg.com/.../seniorTV1.jpeg` |
| `lonely-isolation.jpg`     | `https://img1.wsimg.com/.../lonely1.jpg` |
| `pandemic-separation.jpg`  | `https://img1.wsimg.com/.../pandemic1.jpg` |
| `sick-bedridden.jpg`       | `https://img1.wsimg.com/.../lonely9.jpg` |
| `falls-accidents.jpg`      | `https://img1.wsimg.com/.../lonely2.jpg` |
| `aging-world-stats.png`    | `https://img1.wsimg.com/.../aging%20world%201.png` |
| `senior-love.jpg`          | `https://img1.wsimg.com/.../senior%20love1.jpg` |
| `alice-logo.jpg`           | `https://img1.wsimg.com/.../Alice%20logo%20202310.jpg` |

### From alicehometech.com/image/larryPicture/
| Filename (local)              | Original URL |
|-------------------------------|--------------|
| `alice-logo.webp`             | `...Alice logo 202310.webp` |
| `alice-box.webp`              | `...Alice box.webp` |
| `daily-routine.webp`          | `...caregiver-assisting-with-seniors-daily-routine.webp` |
| `fall-helper.webp`            | `...fall helper.webp` |
| `personal-trainer.webp`       | `...personal trainer.webp` |
| `family-story-tv.webp`        | `...family story time on tv.webp` |
| `doctor-visit-tv.webp`        | `...doctor visit in your TV.webp` |
| `president-on-tv.webp`        | `...president on tv.webp` |
| `surgeon-general.webp`        | `...1.webp` |
| `hope.webp`                   | `...hope3.webp` |

---

## To-Do After Reviewing Locally

- [ ] Download real Alice logo to `assets/images/alice-logo.jpg`
- [ ] Download all images above to `assets/images/`
- [ ] Update all `<img src>` to use local paths (find/replace)
- [ ] Review ZH translation with native speaker
- [ ] Review JA translation with native speaker
- [ ] Add stat-strip to Japanese aging world section
- [ ] Test on iOS Safari (375px) and Android Chrome
- [ ] Compress all images with squoosh.app or imageoptim
- [ ] Test contact form (wire to Formspree or Netlify Forms before deploy)
- [ ] Add favicon (32x32 PNG)
- [ ] Set up Git: `git init && git add . && git commit -m "initial build"`
