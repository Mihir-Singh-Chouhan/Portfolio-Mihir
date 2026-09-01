# Mihir Singh Chouhan - Full Stack Developer Portfolio

A premium, modern, highly interactive developer portfolio website showcasing a full stack developer's skills, projects, and experience.

## 🎯 Features

- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Components**: Hover effects, scroll reveals, and micro-interactions
- **Dark Theme**: Sophisticated dark theme with accent cyan/blue colors
- **Performance Optimized**: Lazy loading, efficient animations, and optimized bundle size
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, reduced motion support
- **SEO Friendly**: Meta tags, Open Graph support, semantic structure

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **Vite** - Lightning-fast build tool
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── TechnologyMarquee.tsx
│   └── Footer.tsx
├── data/             # Portfolio content data
│   └── portfolioData.ts
├── hooks/            # Custom React hooks
│   └── useAnimation.ts
├── utils/            # Utility functions
│   └── animations.ts
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mihir-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📋 Sections

### 1. **Hero Section**
- Eye-catching introduction
- Animated code visualization
- Floating technology badges
- Primary call-to-action buttons

### 2. **Technology Marquee**
- Scrolling technology badges
- Pause on hover functionality
- Responsive design

### 3. **About Section**
- Professional summary
- Animated statistics counters
- Engineering philosophy cards

### 4. **Experience Timeline**
- Vertical timeline layout
- Animated timeline indicators
- Detailed experience cards with technologies

### 5. **Projects Showcase**
- Interactive project cards
- Detailed project modals
- Architecture diagrams
- Technology highlighting

### 6. **Skills Section**
- Categorized skill badges
- Hover interactions
- Proficiency information

### 7. **Achievements**
- Achievement cards with icons
- Education information
- Certifications list

### 8. **Contact Section**
- Call-to-action messaging
- Email and LinkedIn links
- Animated background

## 🎨 Color System

- **Primary Background**: `#050505`
- **Secondary Background**: `#0B0B0F`
- **Card Background**: `#111116`
- **Borders**: `rgba(255,255,255,0.08)`
- **Accent Blue**: `#00D9FF`
- **Accent Cyan**: `#0FF`

## ⚙️ Customization

### Update Portfolio Content

Edit `src/data/portfolioData.ts` to update:
- Personal information
- Professional summary
- Experience details
- Project information
- Skills and technologies
- Achievements and certifications
- Education details

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'dark-bg': '#050505',
  'dark-secondary': '#0B0B0F',
  'dark-card': '#111116',
  'accent-blue': '#00D9FF',
  'accent-cyan': '#0FF',
}
```

### Adjust Animations

Modify animation variants in `src/utils/animations.ts`:
```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
```

## 📱 Responsive Breakpoints

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1440px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Reduced motion support
- Good color contrast ratios
- Accessible form inputs

## ⚡ Performance

- Lazy component loading
- Optimized animations using CSS transforms
- Minimal DOM elements
- Efficient re-render prevention
- Image optimization
- Bundle size optimized

## 🌐 Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 About

This portfolio website was built with React, TypeScript, and Tailwind CSS to showcase Mihir Singh Chouhan's full-stack development capabilities and professional experience.

## 🔗 Links

- **Email**: [mschouhan6855@gmail.com](mailto:mschouhan6855@gmail.com)
- **LinkedIn**: [Mihir Singh Chouhan](https://www.linkedin.com/in/mihir-singh-chouhan)

---

Built with ❤️ by Mihir Singh Chouhan
