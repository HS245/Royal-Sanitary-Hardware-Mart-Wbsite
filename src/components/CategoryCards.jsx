import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../data/products.json";

const CategoryCards = () => {
  const categories = productsData.categories;

  const categorySliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="categories-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Product Categories</h2>
          <p>Complete range of sanitary ware, fittings and accessories</p>
        </motion.div>

        <Slider {...categorySliderSettings}>
          {categories.map((category) => (
            <div key={category.id} className="category-slide">
              <motion.div
                className="category-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <div className="category-icon">
                    <span>{category.icon}</span>
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  {category.items && (
                    <ul className="category-items">
                      {category.items.slice(0, 3).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                      {category.items.length > 3 && <li>& more...</li>}
                    </ul>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategoryCards;
