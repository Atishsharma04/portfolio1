# Atish Sharma — Portfolio

## 📁 Folder Structure

```
src/
├── App.jsx                        ← Main entry point (imports all sections)
│
├── utils/
│   ├── tokens.js                  ← Design tokens (colors, gradients)
│   ├── globalStyles.js            ← Global CSS (fonts, animations, scrollbar)
│   └── useReveal.js               ← Scroll reveal hook
│
└── components/
    ├── UI.jsx                     ← Shared UI: Btn, Pill, SectionTag, SectionTitle, SocialIcon
    ├── Blobs.jsx                  ← Background glow blobs
    ├── Nav.jsx                    ← Navbar (desktop + mobile hamburger)
    ├── ProfileCard.jsx            ← Hero profile card (avatar, socials)
    ├── Hero.jsx                   ← Hero section
    ├── Services.jsx               ← Services section
    ├── About.jsx                  ← About section
    ├── Skills.jsx                 ← Skills section
    ├── Projects.jsx               ← Projects section
    ├── Contact.jsx                ← Contact form + info
    └── Footer.jsx                 ← Footer
```

## 🚀 Setup (Vite + React)

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```


