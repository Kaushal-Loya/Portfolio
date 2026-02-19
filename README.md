# Modern Portfolio

A high-performance, visually stunning personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS 4. This project showcases a modern approach to web design with smooth animations, interactive components, and a focus on user experience.

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Dynamic Background**: Interactive dot grid system that responds to mouse proximity.
- **Smooth Animations**: Powered by GSAP and Motion for fluid transitions and micro-interactions.
- **Smooth Scrolling**: Integrated with Lenis for a premium feel.
- **Dark Mode Support**: Seamless theme switching using `next-themes`.
- **Contact Form**: Functional contact form powered by EmailJS.
- **Performance Focused**: Built on Next.js 15 with optimized image loading and component rendering.

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Styling & UI
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) Primitives
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes)

### Animations
- **Physics-based Animations**: [Motion](https://motion.dev/)
- **Timeline Control**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)

### Form Handling
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Backend**: [EmailJS](https://www.emailjs.com/)

### Utilities
- **Charts**: [Recharts](https://recharts.org/)
- **Toasts**: [Sonner](https://sonner.stevenly.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add your EmailJS credentials or any other required keys.

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open the browser**:
   Navigate to `http://localhost:3000` to see the result.

## 📁 Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable UI components (Hero, Skills, Projects, etc.).
- `/hooks`: Custom React hooks.
- `/lib`: Utility functions and helper classes.
- `/public`: Static assets like images and icons.
- `/styles`: Global CSS and Tailwind configurations.

## 📄 License

This project is licensed under the MIT License.