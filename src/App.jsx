import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Route-level code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Split heavy three.js shader off the main chunk
const ShaderAnimation = lazy(() =>
  import("@/components/ui/shader-animation").then((m) => ({
    default: m.ShaderAnimation,
  }))
);

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="App">
      {/* Global shader background (lazy) - restart on route change */}
      <Suspense fallback={null}>
        <ShaderAnimation
          key={location.pathname}
          className="fixed inset-0 -z-10 pointer-events-none"
          opacity={1.0}
        />
      </Suspense>
      <Navbar />
      <main>
        <Suspense fallback={<div style={{ height: 200 }} /> }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
