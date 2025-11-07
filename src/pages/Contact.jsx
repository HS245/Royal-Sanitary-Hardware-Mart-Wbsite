import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </motion.div>

      <div className="container">
        <div className="contact-layout">
          {/* Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get in Touch</h2>
            <p>
              Visit our showroom or reach out to us through any of the following
              channels. Our team is ready to assist you with your queries.
            </p>

            <div className="contact-info-cards">
              <motion.div
                className="info-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="info-icon" />
                <h3>Visit Us</h3>
                <p>
                  Thana Rd, near Howly Police station
                  <br />
                  Howly, Ambari, Assam 781316
                </p>
              </motion.div>

              <motion.div
                className="info-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="info-icon" />
                <h3>Call Us</h3>
                <p>+91 6003977758</p>
              </motion.div>

              <motion.div
                className="info-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="info-icon" />
                <h3>Email Us</h3>
                <p>royalsanitaryhowly@gmail.com</p>
              </motion.div>

              <motion.div
                className="info-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaClock className="info-icon" />
                <h3>Working Hours</h3>
                <p>
                  Mon - Sat: 9:00 AM - 8:00 PM
                  <br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              className="map-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.881711260685!2d90.9667468114316!3d26.427293576843763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37597539804102bb%3A0xb75182e450f66d96!2sRoyal%20Sanitary%20%26%20Hardware%20Mart!5e0!3m2!1sen!2sin!4v1762456509688!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Sanitary & Hardware Mart Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-container">
              <h2>Send us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Gmail"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 Phoene Number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-large"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FaPaperPlane />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
