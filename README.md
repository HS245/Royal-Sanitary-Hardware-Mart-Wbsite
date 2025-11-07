# Royal Sanitary & Hardware Mart# React + Vite

A luxury e-commerce website showcasing premium bathroom fittings, sanitary ware, and hardware solutions with stunning animations and scroll effects.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 🌟 FeaturesCurrently, two official plugins are available:

✨ **Luxury Design System**- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- Premium color palette with gold accents- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Elegant typography using Playfair Display and Poppins fonts

- Sophisticated UI with smooth transitions## React Compiler

🎨 **Animations & Effects**The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- Framer Motion powered smooth animations

- Scroll-triggered content reveals## Expanding the ESLint configuration

- Hover effects on products and cards

- Floating animations on hero sectionIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- Parallax scroll effects

📱 **Fully Responsive**

- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

🛍️ **Product Showcase**

- Detailed product cards with hover overlays
- Category-based filtering
- Search functionality
- Sort by price and name
- Quick view, wishlist, and cart actions

📄 **Pages**

- **Home**: Hero section, categories, featured products, and CTA
- **Products**: Filterable product catalog with sidebar
- **About**: Company story, values, and statistics
- **Contact**: Contact form and information cards

## 🚀 Tech Stack

- **React** - UI library
- **React Router DOM** - Navigation and routing
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **Vite** - Build tool and dev server

## 📦 Installation

```bash
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
rs-hm/
├── public/
│   ├── logo.svg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryCards.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── package.json
```

## 🎨 Key Features

### Animations

- **Hero Section**: Floating card animation with smooth entrance
- **Product Cards**: Hover scale effects and overlay reveals
- **Category Cards**: Slide-up overlay on hover
- **Scroll Effects**: Fade and slide animations on scroll
- **Page Transitions**: Smooth navigation between pages

### Components

#### Navbar

- Sticky navigation with scroll effect
- Active route highlighting
- Mobile responsive menu
- Top bar with contact info

#### Hero

- Eye-catching hero section with gradient overlay
- Animated statistics
- Call-to-action buttons
- Floating product showcase

#### Product Card

- Premium product display
- Quick action buttons (cart, wishlist, view)
- Feature tags
- Price display with currency
- Hover animations

#### Footer

- Comprehensive site links
- Contact information
- Social media links
- Multi-column layout

### Styling

- CSS Custom Properties for theming
- Gradient backgrounds
- Box shadows for depth
- Smooth transitions
- Responsive grid layouts

## 🎨 Color Palette

- **Primary**: #2C3E50 (Dark Blue)
- **Secondary**: #E67E22 (Orange)
- **Accent**: #C0A062 (Gold)
- **Gold**: #D4AF37 (Luxury Gold)
- **Dark**: #1a1a1a
- **Light**: #f8f9fa

## 📝 Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Poppins (Sans-serif)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Future Enhancements

- Shopping cart functionality
- User authentication
- Product detail pages
- Payment integration
- Customer reviews
- Live chat support
- Wishlist persistence
- Email notifications

## 📧 Contact

For inquiries, please contact:

- Email: info@royalsanitary.com
- Phone: +1 (234) 567-8900

---

Built with ❤️ for luxury
