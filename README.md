# 🌐 My Portfolio Site – Selenay.dev

A modern and fully responsive personal portfolio website built to showcase my **education**, **technical skill set**, and **projects** in an elegant, interactive, and mobile-friendly way.

---

## 🚀 Live Demo
🔗 [my-portfolio-site-pearl-three.vercel.app](my-portfolio-site-pearl-three.vercel.app)

---

## 🧠 About the Project
**My Portfolio Site** serves as a digital catalog that highlights my background in **cybersecurity, software development, and cloud technologies**.  
It combines smooth animations, responsive design, and clean UI/UX principles to create an engaging online presence.

The homepage introduces me with a hero section, a dynamic **video carousel**, and quick links to my projects and contact form.  
Subpages include dedicated sections for **About Me**, **Technologies**, **Projects**, and **Contact**.

---

## 🏗️ Tech Stack

### 💻 Frontend
- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** – for animations and transitions
- **Next/Image** – for optimized image rendering

### 🎨 Design & UI
- **Custom color palette** inspired by orange/purple gradients
- **Responsive layout** powered by Tailwind’s grid and flex utilities
- **Smooth video transitions** using Framer Motion’s `AnimatePresence`
- **Figma / Canva** used for UI mockups and visual concepting

---

## 📦 Dependencies

Main NPM packages used:

| Package | Purpose |
|----------|----------|
| `next` | Core React framework for SSR/SSG |
| `react`, `react-dom` | Frontend rendering |
| `framer-motion` | Smooth animations & transitions |
| `tailwindcss`, `postcss`, `autoprefixer` | Styling framework |
| `typescript` | Type safety and maintainability |
| `eslint`, `prettier` | Code formatting & linting |

---

## ⚙️ Project Structure
```
my-portfolio-site/mysite
│
├── public/
│ ├── videos/ # grad.mp4, surf.mp4, and poster images
│ ├── profile.JPG # main profile image
│ └── favicon.ico
│
├── src/
│ ├── app/
│ │ ├── layout.tsx # Global layout (Navbar, Footer)
│ │ ├── page.tsx # Homepage (Hero, About, Tech, Projects, Contact)
│ │
│ └── components/
│ ├── About.tsx
│ ├── Technologies.tsx
│ ├── Projects.tsx
│ ├── Contact.tsx
│ └── VideoCarousel.tsx # Animated video slider
│
├── .gitignore
├── README.md
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── eslint.config.mjs
└── tsconfig.json
```

## ⚙️ Deployment Strategy

The site is deployed on Vercel with automatic build and deployment from the main branch.
When you push changes to main, Vercel automatically:
Pulls the latest commit
Installs dependencies
Runs ```npm run build```
Serves the optimized Next.js app globally

## 📱 Responsiveness

Designed with a web-first approach.
Fully responsive across all screen sizes (mobile, tablet, desktop).
Custom breakpoints are managed through Tailwind’s responsive utilities.

## 💡 Features

🎥 Animated video carousel in hero section
🧠 Dynamic "About Me" and "Technologies" sections
🛠️ Projects dynamically displayed
✉️ Smooth scroll-to-section navigation
⚡ Fast build and optimized performance with Next.js
