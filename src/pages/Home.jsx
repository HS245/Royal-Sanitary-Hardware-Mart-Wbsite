import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import {
  FaAward,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaStore,
  FaCheckCircle,
} from "react-icons/fa";

const Home = () => {
  const allProducts = productsData.products;
  const navigate = useNavigate();
  const storeInfoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: storeInfoRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 1, 1, 0.3]
  );

  const brandSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    touch: true,
    swipeToSlide: true,
    touchThreshold: 10,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    touch: true,
    swipeToSlide: true,
    touchThreshold: 10,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const featureSliderSettings = {
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

  const features = [
    {
      icon: FaAward,
      title: "Premium Quality",
      description: "Only the finest materials and craftsmanship",
    },
    {
      icon: FaShieldAlt,
      title: "Warranty Protection",
      description: "Extended warranties on all products",
    },
    {
      icon: FaTruck,
      title: "Free Delivery",
      description: "Complimentary shipping on orders above ₹50,000",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Expert assistance whenever you need",
    },
  ];

  return (
    <div className="home">
      <Hero />

      {/* Store Information Section */}
      <motion.section
        ref={storeInfoRef}
        className="store-info-section"
        style={{ y, scale, opacity }}
      >
        <div className="container">
          <motion.div
            className="store-info-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="store-info-text">
              <FaStore className="store-icon" />
              <h2>Welcome to {productsData.storeInfo.name}</h2>
              <p className="store-tagline">
                {productsData.storeInfo.description}
              </p>
              <p className="store-details">
                Established in{" "}
                <strong>{productsData.storeInfo.established}</strong>, we are
                your trusted partner for all bathroom and hardware needs.
                {productsData.storeInfo.specialization}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Authorized Dealer</h2>
            <p>We proudly carry the finest brands in the industry</p>
          </motion.div>

          <Slider {...brandSliderSettings}>
            {productsData.brands
              .filter((b) => b.featured)
              .map((brand) => (
                <div key={brand.name} className="brand-slide">
                  <motion.div className="brand-card" whileHover={{ y: -5 }}>
                    {brand.logo && (
                      <div className="brand-logo">
                        <img src={brand.logo} alt={`${brand.name} logo`} />
                      </div>
                    )}
                    <h3>{brand.name}</h3>
                    <p>{brand.category}</p>
                  </motion.div>
                </div>
              ))}
          </Slider>
        </div>
      </section>

      <CategoryCards />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          {isMobile ? (
            <Slider {...featureSliderSettings}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-slide">
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                      <Icon className="feature-icon" />
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </motion.div>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <motion.div
              className="features-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="feature-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="catalog" className="product-catalog">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Product Catalog</h2>
            <p>
              Browse our complete range of premium sanitary ware and fittings
            </p>
          </motion.div>

          <Slider {...productSliderSettings}>
            {allProducts.map((product) => (
              <div key={product.id} className="product-slide">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive support for all your needs</p>
          </motion.div>

          <div className="services-grid">
            {productsData.services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheckCircle className="service-icon" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Visit Our Showroom Today</h2>
            <p>Experience our products firsthand and get expert consultation</p>
            <motion.button
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
