import styles from "./ProductList.module.css"
import ProductCard from "../product-card/ProductCard"

const ProductList = ({ products, title }) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.products_box}>
        {products.map((item, i) => (
          <ProductCard product={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
