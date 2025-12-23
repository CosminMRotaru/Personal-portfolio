# 📸 Portfolio Instagram Clone

A personal portfolio website styled like Instagram's web profile layout, built with React + Vite.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)

## ✨ Features

- **Instagram-inspired UI** — Dark mode profile layout with avatar, bio, stats, and posts
- **Skills Carousel** — Interactive skill highlights with story-like modal viewer
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Smooth Navigation** — Sidebar on desktop, bottom nav on mobile/tablet
- **Project Showcase** — Feed-style cards with live demo and code links

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Vanilla CSS for responsive overrides

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Desktop navigation
│   ├── TopBar.jsx        # Mobile/tablet header
│   ├── BottomNav.jsx     # Mobile/tablet navigation
│   ├── ProfileHeader.jsx # Avatar, bio, action buttons
│   ├── Highlights.jsx    # Skills carousel + modal
│   ├── Feed.jsx          # Posts container
│   ├── PostCard.jsx      # Individual project cards
│   └── Tabs.jsx          # Section tabs
├── styles/
│   ├── styles.css        # Global styles
│   └── responsive.css    # Mobile/tablet overrides
├── data.js               # Site content & projects
├── App.jsx               # Main layout
└── main.jsx              # Entry point
```

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| < 768px | Mobile — TopBar + BottomNav |
| 768px - 1023px | Tablet — TopBar + BottomNav |
| ≥ 1024px | Desktop — Sidebar |

## 👤 Author

**Rotaru Marius-Cosmin**

- GitHub: [@CosminMRotaru](https://github.com/CosminMRotaru)
- LinkedIn: [Marius-Cosmin Rotaru](https://www.linkedin.com/in/marius-cosmin-rotaru-a8a242262/)
- Email: cosminmariusrotaru@gmail.com

## 📄 License

This project is for personal portfolio use.
