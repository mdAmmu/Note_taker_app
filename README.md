# Note Taker App

A modern, powerful, and aesthetically pleasing Note-Taking application built to help you capture your thoughts, manage tasks, and brainstorm visually in one seamless environment.

## ✨ Features

- **Intuitive Dashboard**: Easily categorize and organize your notes with titles, descriptions, dynamic themes, categories, and tags.
- **Create Notes**: Add new notes through a sleek, user-friendly modal pop-up.
- **Fully Integrated Whiteboard**: Jump into a fully functional digital whiteboard (powered by Excalidraw) directly from your dashboard to sketch, draw, and map out complex ideas.
- **Beautiful UI/UX**: Crafted with detailed gradient cards, micro-interactions, responsive grids, and modern typography.
- **Smooth Navigation**: Enjoy instant transitions across your home, dashboard, and whiteboard screens using client-side routing.

## 🛠️ Tech Stack

- **Core**: React 19 & Next.js
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Whiteboard Engine**: `@excalidraw/excalidraw`

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/en/) installed.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate into the project directory**:
   ```bash
   cd my-app
   ```

3. **Install dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn/pnpm:
   ```bash
   yarn install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure Overview

- `app/page.tsx`: The main entry point that configures the React Router setup (`/`, `/dashboard`, `/whiteboard`).
- `app/components/HomePage.tsx`: The vibrant landing page with the Hero section, features overview, reviews, and a contact form.
- `app/components/Dashboard.tsx`: The core note management interface featuring a multi-column layout, tag filtering, and the note-creation modal.
- `app/components/WhiteBoard.tsx`: The full-screen blank canvas for drawing, utilizing the Excalidraw package.

## 📜 License

This project is completely open source and free to use.
