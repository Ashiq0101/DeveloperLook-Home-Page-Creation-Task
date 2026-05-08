# DeveloperLook Frontend Assessment: Rise at Seven Homepage Clone

## Overview

**What I Created:** A high-fidelity, pixel-perfect, and fully responsive clone of the [Rise at Seven](https://riseatseven.com/) homepage.
**For Whom:** This project was specifically developed as a technical assessment task for **DeveloperLook**.
**Purpose:** The primary objective of this project was to showcase advanced frontend development capabilities. This includes demonstrating proficiency in architecting modular components, handling complex UI/UX layouts, and orchestrating sophisticated scroll-triggered animations.

## Technologies Used

The project was built utilizing modern web technologies to ensure high performance, scalability, and maintainability:

- **Core Framework**: React 19 (bootstrapped with Vite for optimized builds and fast development)
- **Styling**: Vanilla CSS, utilizing custom properties and modular component-level stylesheets for scope and clarity
- **Animations**: GSAP (GreenSock Animation Platform) and ScrollTrigger for complex, highly performant scroll-linked interactions and timelines
- **Carousels**: Swiper.js for building seamless, responsive, and touch-friendly image sliders
- **Utilities**: Cheerio (utilized during development for reliable content extraction and scraping)

## Key Features Implemented

- **Pixel-Perfect Responsive UI**: Meticulous attention to CSS breakpoints ensuring the layout remains pristine across mobile, tablet, and widescreen desktop devices.
- **Advanced Scroll Interactions**: Implementation of complex scroll-based animations including pinned stacked cards ("Pioneers" section), dynamic scrolling marquees, and synchronized reveal effects.
- **Dynamic Navigation System**: A custom header that transitions smoothly into a sticky, floating "pill" upon scrolling, complete with intelligent color-inversion logic and an interactive mobile menu.
- **Modular Component Architecture**: A clean, highly structured React codebase that prioritizes component reusability and clear separation of concerns.

## Installation & Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashiq0101/DeveloperLook-Home-Page-Creation-Task.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd DeveloperLook-Home-Page-Creation-Task
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Development & Deployment

The source code is organized by feature-specific components (`src/components/`) with corresponding CSS files to ensure styles do not leak globally. The application is fully optimized for production and can be seamlessly deployed to platforms like Vercel or Netlify.
