import styles from "./ProductPage.module.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import products from "../../assets/data/products"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/slices/cartSlice"
import { toast } from "react-toastify"
const ProductPage = () => {
  const dispatch = useDispatch()
  const [currentProduct, setCurrentProduct] = useState()
  const { id } = useParams()

  const addProduct = () => {
    const { productName, price, imgUrl } = currentProduct
    dispatch(
      cartActions.addItem({
        id,
        productName,
        price,
        imgUrl,
      })
    )
    toast.success("item added to cart")
  }

  useEffect(() => {
    const getProduct = products.find(item => item.id === id)
    setCurrentProduct(getProduct)
  }, [id])
  return (
    <div className={styles.container}>
      {!currentProduct ? (
        <h2>Loading</h2>
      ) : (
        <div className={styles.page_container}>
          <div className={styles.page_left}>
            <div className={styles.img_box}>
              <img src={currentProduct.imgUrl} alt='' />
            </div>
          </div>
          <div className={styles.page_right}>
            <h2>{currentProduct.productName}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              !
            </p>
            <p className={styles.price_box}>
              price:{" "}
              <span className={styles.price}> ${currentProduct.price}</span>
            </p>
            <div className={styles.btn_box}>
              <button className='buy_btn'>
                <Link to='/shop'>Continue Shopping</Link>
              </button>
              <button onClick={addProduct} className='buy_btn_2'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
