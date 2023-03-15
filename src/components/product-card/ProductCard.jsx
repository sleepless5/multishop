import styles from "./ProductCard.module.css"
import { cartActions } from "../../store/slices/cartSlice"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { id, productName, price, imgUrl } = product
  const addItem = () => {
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
  return (
    <Link to={`/shop/${id}`}>
      <div className={styles.container}>
        <div className={styles.img_box}>
          <img className={styles.img} src={product.imgUrl} alt='' />
        </div>
        <div className={styles.info_box}>
          <h2> {product.productName}</h2>
          <p className={styles.category}>{product.category}</p>
          <div className={styles.bottom}>
            <p>
              $<span className={styles.price}>{product.price}</span>
            </p>
            <span>
              <i onClick={addItem} class='ri-add-circle-line'></i>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
