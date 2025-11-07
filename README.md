# Royal Sanitary & Hardware Mart

A luxury e-commerce website showcasing premium bathroom fittings, sanitary ware, and hardware solutions with stunning WebGL shader animations and modern carousel effects.

## 🌟 Features

### ✨ **Premium Design System**

- Dark theme with golden accents (#d4af37)
- Global WebGL shader background using Three.js
- Elegant typography using Playfair Display and Poppins fonts
- Sophisticated glassmorphism UI effects

### 🎨 **Animations & Effects**

- Custom WebGL shader background with animated color patterns
- Framer Motion powered smooth animations
- Auto-sliding carousels for brands, categories, and products
- Scroll-triggered content reveals
- Hover effects with golden accents
- Parallax scroll effects on store info section

### 📱 **Fully Responsive**

- Mobile-first design approach (optimized for devices down to 320px)
- Adaptive layouts for all screen sizes (1024px, 768px, 480px, 420px breakpoints)
- Touch-friendly carousels with swipe gestures
- Optimized performance for mobile devices

### 🏪 **Business Features**

- Authorized dealer showcase for 4 premium brands:
  - Hindware (Sanitary Ware & CP Fittings)
  - Jaquar (Luxury Fittings)
  - Astral Pipes (Sanitary Ware)
  - Ashirvad Pipes (Bathroom Solutions)
- Product catalog with detailed specifications
- Service offerings section
- Contact information with location details
- Developer attribution in footer

### 📄 **Pages**

- **Home**: Hero section, authorized dealers, categories, featured products, services, and CTA
- **About**: Company story with dark theme, values carousel (mobile), and statistics
- **Contact**: Contact form with dark glassmorphism design and information cards

## 🚀 Tech Stack

### Core Technologies

- **React 19.1.1** - Modern UI library
- **Vite (rolldown-vite 7.1.14)** - Lightning-fast build tool
- **React Router DOM** - Navigation and routing
- **Framer Motion** - Animation library

### Animation & UI Libraries

- **Framer Motion 12.23.24** - Advanced animations and transitions
- **Three.js** - WebGL shader background rendering
- **React Slick** - Carousel/slider functionality
- **Slick Carousel** - Carousel CSS styling

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **CSS Variables** - Dynamic theming system
- **Google Fonts** - Playfair Display & Poppins

### Routing & Icons

- **React Router DOM 7.9.5** - Client-side routing
- **React Icons** - Comprehensive icon library

### Development Tools

- **TypeScript** - Type checking for shader component
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/HS245/Royal-Sanitary-Hardware-Mart-Wbsite.git

# Navigate to project directory
cd Royal-Sanitary-Hardware-Mart-Wbsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
royal-sanitary/
├── public/
│   ├── RS&HM Logo.png
│   ├── Hindware Logo Vector.svg
│   ├── Astral Pipes.svg
│   ├── Jqaur.svg
│   └── ashirvad-logo.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── All.png (desktop hero)
│   │       ├── All2.png (mobile hero)
│   │       ├── 1.png, 2.png, 3.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryCards.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ui/
│   │       └── shader-animation.tsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Key Features

### WebGL Shader Animation

- Custom fragment shader with animated color gradients
- Global fixed background across all pages
- Optimized opacity (0.16) for subtle effect
- GPU-accelerated rendering via Three.js

### Carousel Implementation

- **Brands Section**: Auto-sliding showcase of 4 authorized dealers
- **Categories Section**: Product categories with auto-play
- **Products Section**: Featured products carousel
- **Features Section**: Mobile-only carousel for key features
- **About Page**: Mobile-only carousels for company values and statistics

All carousels feature:

- Auto-play with configurable speed
- Pause on hover
- Infinite loop
- Responsive breakpoints
- Smooth slide transitions

### Responsive Design

- **Desktop (>1024px)**: Full grid layouts, multi-column displays
- **Tablet (768px-1024px)**: 2-column grids, adjusted spacing
- **Mobile (480px-768px)**: Single column, carousels active
- **Small Mobile (<480px)**: Optimized padding and font sizes
- **Extra Small (<420px)**: Fine-tuned spacing for narrow screens

### Components

#### Navbar

- Sticky navigation with backdrop blur (desktop)
- Solid background on scroll
- Active route highlighting with golden underline
- Mobile hamburger menu with smooth animations
- Top bar with phone and email contact
- Auto scroll-to-top on navigation

#### Hero

- Responsive service images (All.png for desktop, All2.png for mobile)
- Animated hero badge with premium branding
- Gradient text effects on main heading
- Call-to-action buttons with hover animations
- Statistics display (500+ Products, 10K+ Customers, Est. 2025)
- Framer Motion entrance animations

#### Product Card

- Simplified clean design without pricing
- Brand badge display
- Product name, model, and description
- Feature tags with golden styling
- Image display with hover scale effect
- No cart/wishlist buttons (display-only)

#### Footer

- 3-column layout (Company Info, Quick Links, Contact)
- Company logo with tagline
- Social media links with hover effects
- Contact information (Howly, Assam location)
- Developer attribution with GitHub, LinkedIn, Instagram links
- Golden hover effects on links

## 🏢 Business Information

**Royal Sanitary & Hardware Mart**

- **Established**: 2025
- **Location**: Thana Rd, near Howly Police station, Howly, Ambari, Assam 781316
- **Phone**: +91 6003977758
- **Email**: royalsanitaryhowly@gmail.com
- **Hours**:
  - Mon-Sat: 9:00 AM - 8:00 PM
  - Sunday: 10:00 AM - 6:00 PM

### Authorized Dealer For:

1. **Hindware** - Sanitary Ware & CP Fittings
2. **Jaquar** - Luxury Fittings
3. **Astral Pipes** - Sanitary Ware
4. **Ashirvad Pipes** - Bathroom Solutions

## 🎨 Design System

### Color Palette

```css
--gold-color: #d4af37; /* Primary accent */
--primary-color: #2c3e50; /* Text/headings */
--dark-color: #1a1a1a; /* Backgrounds */
--white: #ffffff; /* Text on dark */
```

### Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Poppins (Sans-serif)

### Shadows & Effects

- Glassmorphism with `backdrop-filter: blur(10px)`
- Golden glow shadows on hover
- Smooth transitions (0.3s ease)
- Parallax scroll effects

## 📱 Mobile Optimization

### Performance Enhancements

- Disabled heavy backdrop-filter on mobile navbar
- Optimized carousel settings for touch devices
- Reduced padding and spacing for small screens
- Lazy loading for images
- Efficient re-renders with React hooks

### Touch Interactions

- Swipe gestures for carousels
- Large touch targets (min 44x44px)
- Smooth scroll behavior
- No hover states on mobile

## 🚀 Development

### Available Scripts

```bash
npm run dev      # Start dev server (localhost:5174)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Key Dependencies

```json
{
  "react": "^19.1.1",
  "framer-motion": "^12.23.24",
  "react-router-dom": "^7.9.5",
  "react-slick": "^0.30.2",
  "three": "latest"
}
```

## 📄 Pages Overview

### Home Page (`/`)

- Hero section with service images
- Store information with golden parallax effect
- Authorized dealers carousel
- Product categories carousel
- Featured products catalog
- Why Choose Us features
- Our services grid
- Visit showroom CTA

### About Page (`/about`)

- Company history and mission
- Core values (mobile carousel)
- Statistics and achievements (mobile carousel)
- Team information
- Dark theme with glassmorphism

### Contact Page (`/contact`)

- Contact form with validation
- Information cards (Location, Phone, Email, Hours)
- Dark glassmorphism design
- Google Maps integration ready
- Golden accent styling

## 👨‍💻 Developer

**Hassan Shahid**

- **Email**: hassanshahid245@gmail.com
- **GitHub**: [HS245](https://github.com/HS245)
- **LinkedIn**: [Hassan Shahid](https://www.linkedin.com/in/hassan-shahid-0991071a3)
- **Instagram**: [@**hs**0002](https://www.instagram.com/__hs__0002/)

_Contact me for site development_ 👨‍💻

## 📝 License

This project is proprietary and belongs to Royal Sanitary & Hardware Mart.

## 🙏 Acknowledgments

- Three.js for WebGL rendering
- Framer Motion for smooth animations
- React Slick for carousel functionality
- Unsplash for placeholder images
- Google Fonts for typography

---

**© 2025 Royal Sanitary & Hardware Mart. All rights reserved.**

_Designed with ❤️ for luxury_
