import styles from "./Home.module.css"
import Helmet from "../../components/helmet/Helmet"
import ProductList from "../../components/product-list/ProductList"
import products from "../../assets/data/products"
import ImageSlider from "../../components/slider/ImageSlider"
import LimitedOffer from "../../components/limited-offer/LimitedOffer"
console.log(products)
const Home = () => {
  const filterProducts = category => {
    return products.filter(item => item.category === category)
  }
  return (
    <Helmet title='home'>
      <ImageSlider />
      <div className={styles.container}>
        <ProductList title='Mobile' products={filterProducts("mobile")} />
        <LimitedOffer />
        <ProductList title='Furniture' products={filterProducts("sofa")} />
      </div>
    </Helmet>
  )
}

export default Home
