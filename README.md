<div align="center">
  <!-- Replace the src with your uploaded GitHub assets/videos/images -->
  <img src="https://via.placeholder.com/1200x600/5542ff/ffffff?text=Redefine+Preview+Banner" alt="Redefine Preview" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />

  <h1 align="center">Redefine — The Metagame Layer</h1>
  
  <p align="center">
    A premium, fully responsive, and highly animated landing page for a web3/gaming metaverse, built with <strong>Next.js 15</strong>, <strong>Tailwind CSS 4</strong>, and <strong>GSAP</strong>.
  </p>

  <p align="center">
    <a href="#features"><strong>Features</strong></a> · 
    <a href="#tech-stack"><strong>Tech Stack</strong></a> · 
    <a href="#quick-start"><strong>Quick Start</strong></a>
  </p>
</div>

---

## 🌐 Live Demo
*(Insert your deployed Vercel link here once deployed)*
[**View Live Deployment**](https://redefine-app.vercel.app/)

## ✨ Features

- **Immersive 3D Animations:** Complex, scroll-linked animations and page transitions powered by `GSAP` and a custom `ScrollAnimator`.
- **Full Localization (i18n):** Flawless runtime language switching between **English (EN)** and **Japanese (JP)** using a highly scalable dictionary-based React Context provider.
- **Dynamic Responsive Grid:** Beautiful `bento-box` style layouts that intelligently scale from mobile to 4k desktop screens.
- **Premium UI/UX:** Styled using the latest features of **Tailwind CSS v4**, featuring modern glassmorphism, dynamic glowing effects, and smooth micro-interactions.
- **Optimized Video Backgrounds:** Intelligent lazy-loading and dynamic hover-playing of HTML5 video assets.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** TypeScript

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/redefine.git
cd redefine
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files.

## 🌍 Localization System

This project features a highly scalable, custom internationalization (i18n) setup. Strings are stored centrally in dictionary files to allow seamless expansion to additional languages.

- `utils/eng.tsx` - English Dictionary
- `utils/jp.tsx` - Japanese Dictionary
- `context/LanguageContext.tsx` - Provides the `t()` function across the entire app.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
<div align="center">
  <p>&copy; 2026 Ankit Kumar. All rights reserved.</p>
</div>
