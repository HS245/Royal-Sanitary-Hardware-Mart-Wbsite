import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheckCircle, FaHeart, FaUsers, FaStar } from "react-icons/fa";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    touch: true,
    swipeToSlide: true,
    touchThreshold: 10,
    swipe: true,
    draggable: true,
  };

  const values = [
    {
      icon: FaCheckCircle,
      title: "Quality First",
      description:
        "We never compromise on quality. Every product we offer meets the highest standards of craftsmanship and durability.",
    },
    {
      icon: FaHeart,
      title: "Customer Care",
      description:
        "Your satisfaction is our priority. We provide personalized service and support at every step of your journey.",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description:
        "Our knowledgeable team brings years of experience to help you make the right choices for your projects.",
    },
    {
      icon: FaStar,
      title: "Innovation",
      description:
        "We stay ahead of trends, offering the latest designs and technologies in sanitary and hardware solutions.",
    },
  ];

  const stats = [
    { number: "New", label: "Established 2025" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "50+", label: "Expert Team Members" },
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>About Us</h1>
          <p>Crafting luxury spaces since 2025</p>
        </div>
      </motion.div>

      <div className="container">
        {/* Story Section */}
        <section className="about-section">
          <motion.div
            className="about-content-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2025, Royal Sanitary & Hardware Mart has been at the
                forefront of delivering premium bathroom and hardware solutions.
                What started as a small family business has grown into a trusted
                name in luxury sanitary ware.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction
                has been the cornerstone of our success. We partner with
                world-renowned brands and manufacturers to bring you the finest
                products that combine elegance, functionality, and durability.
              </p>
              <p>
                Today, we serve thousands of satisfied customers, from
                homeowners to architects and interior designers, helping them
                create spaces that reflect sophistication and style.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"
                alt="Our Showroom"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Values</h2>
            <p>What drives us every day</p>
          </motion.div>

          {isMobile ? (
            <Slider {...sliderSettings}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="value-slide">
                    <motion.div className="value-card" whileHover={{ y: -5 }}>
                      <Icon className="value-icon" />
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </motion.div>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div className="values-grid">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="value-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="value-icon" />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          {isMobile ? (
            <Slider {...sliderSettings}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-slide">
                  <motion.div className="stat-box">
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          ) : (
            <motion.div
              className="stats-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-box"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;
