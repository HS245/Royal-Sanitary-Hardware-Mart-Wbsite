import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="footer-logo">
                <img
                  src="/RS&HM Logo.png"
                  alt="RS&HM Logo"
                  className="logo-image"
                />
                <div className="logo-text">
                  <span className="logo-main">Royal Sanitary</span>
                  <span className="logo-sub">& Hardware Mart</span>
                </div>
              </div>
              <p className="footer-desc">
                Your trusted partner for premium sanitary ware and hardware
                solutions. Quality and elegance since 2025.
              </p>
              <div className="social-links">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>
                    Thana Rd, near Howly Police station
                    <br />
                    Howly, Ambari, Assam 781316
                  </span>
                </li>
                <li>
                  <FaPhone />
                  <span>+91 6003977758</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>royalsanitaryhowly@gmail.com</span>
                </li>
                <li>
                  <FaClock />
                  <span>
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 6:00 PM
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Royal Sanitary & Hardware Mart. All rights
              reserved.
            </p>
            <div className="developer-info">
              <p className="developer-text">Site developed by</p>
              <p className="developer-name">
                <a
                  href="https://github.com/HS245"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hassan Shahid
                </a>
              </p>
              <div className="developer-links">
                <a
                  href="https://github.com/HS245"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/hassan-shahid-0991071a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/__hs__0002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <p className="developer-email">
                <FaEnvelope /> hassanshahid245@gmail.com
              </p>
              <p className="developer-tagline">
                Contact me for site development 👨‍💻
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
