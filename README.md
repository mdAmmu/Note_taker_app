<p align="center">
  <img src="./public/Project_images/home_page.png" alt="Note Taker App" width="800"/>
</p>

<h1 align="center">📝 Note Taker App</h1>

<p align="center">
  A modern note-taking application with an integrated whiteboard canvas for visual brainstorming — built with Next.js 16, React 19, and Excalidraw.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Excalidraw-Canvas-6965DB?style=for-the-badge" alt="Excalidraw"/>
</p>

---

## 📑 Table of Contents

- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [License](#-license)

---

## 📸 Screenshots

| Home Page | Feature Page |
|:-:|:-:|
| ![Home](./public/Project_images/home_page.png) | ![Features](./public/Project_images/feature_page%20(1).png) |

| Notes Page | Note Details |
|:-:|:-:|
| ![Notes](./public/Project_images/note_page.png) | ![Details](./public/Project_images/notes_detail.png) |

---

## ✨ Features

- 📝 **Rich Note Taking** — Create, edit, and organize notes with a clean interface
- 🎨 **Whiteboard Canvas** — Built-in Excalidraw whiteboard for diagrams, sketches, and visual brainstorming
- 📊 **Dashboard** — Overview of all your notes and quick access
- 🗂️ **Note Organization** — Browse, search, and manage notes efficiently
- 📱 **Responsive Design** — Works seamlessly across desktop and mobile
- ⚡ **Fast & Modern** — Built on Next.js 16 with React 19 for optimal performance

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Canvas/Drawing** | Excalidraw |
| **Icons** | Lucide React, React Icons |

---

## 📁 Folder Structure

```
note_taker_app/
├── app/
│   ├── components/                # 🧩 Shared UI components
│   ├── dashboard/
│   │   └── page.tsx               # 📊 Dashboard view
│   ├── pages/
│   │   └── Note.tsx               # 📝 Note editor page
│   ├── whiteboard/
│   │   └── page.tsx               # 🎨 Excalidraw whiteboard
│   ├── Navbar.tsx                 # Navigation bar
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home / landing page
│   └── globals.css                # Global styles
├── public/
│   └── Project_images/            # 📸 Screenshots
│       ├── home_page.png
│       ├── feature_page (1).png
│       ├── note_page.png
│       └── notes_detail.png
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm**, **yarn**, or **pnpm**

### Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone <repository-url>
cd note_taker_app

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the development server
npm run dev
```

🌐 The app will be available at **http://localhost:3000**

> 💡 This is a frontend-only application — no environment variables or database setup required.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |

---

## 📄 License

MIT
