import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        {product.brand && <div className="product-badge">{product.brand}</div>}
      </div>

      <div className="product-info">
        {product.brand && <div className="product-brand">{product.brand}</div>}
        <h3 className="product-name">{product.name}</h3>
        {product.model && (
          <div className="product-model">Model: {product.model}</div>
        )}
        <p className="product-description">{product.description}</p>

        <div className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
