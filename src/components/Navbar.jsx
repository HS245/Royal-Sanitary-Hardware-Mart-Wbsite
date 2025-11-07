import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+916003977758">
                <FaPhone /> +91 6003977758
              </a>
              <a href="mailto:royalsanitaryhowly@gmail.com">
                <FaEnvelope /> royalsanitaryhowly@gmail.com
              </a>
            </div>
            <div className="top-bar-right">Premium Quality Since 2025</div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="logo-container"
              >
                <img src="/RS&HM Logo.png" className="logo-image" />
                <div className="logo-text">
                  <span className="logo-main">Royal Sanitary</span>
                  <span className="logo-sub">& Hardware Mart</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <ul className="nav-links desktop-menu">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? "active" : ""}
                    onClick={() => handleNavClick(link.path)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? "active" : ""}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
