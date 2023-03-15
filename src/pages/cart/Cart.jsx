import styles from "./Cart.module.css"
import { cartActions } from "../../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const subTotal = useSelector(state => state.cart.totalAmount)
  const dispatch = useDispatch()

  const deleteItem = id => {
    dispatch(cartActions.deleteItem(id))
    toast.success("item deleted")
  }

  return (
    <div className={styles.container}>
      {cartItems.length === 0 ? (
        <h4>No items in the cart</h4>
      ) : (
        <>
          <h2>Items in Cart</h2>{" "}
          <div className={styles.cart_container}>
            {/* ------Left side of the cart----------- */}
            <div className={styles.cart_left}>
              <div className={styles.cart_box}>
                <div>
                  <h3>Image</h3>
                </div>
                <div className={styles.title}>
                  <h3>Title</h3>
                </div>
                <div>
                  <h3>Price</h3>
                </div>
                <div>
                  <h3>Quantity</h3>
                </div>
                <div>
                  <h3>Delete</h3>
                </div>
              </div>
              {cartItems.map((item, id) => (
                <div key={id} className={styles.cart_box}>
                  <div>
                    <img src={item.image} alt='' />
                  </div>
                  <div>
                    <p>{item.productName}</p>
                  </div>
                  <div>
                    <p>${item.price}</p>
                  </div>
                  <div className={styles.quantity_box}>
                    <button
                      onClick={() =>
                        dispatch(cartActions.decreaseItemCount(item.id))
                      }
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        dispatch(cartActions.increaseItemCount(item.id))
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.delete_box}>
                    <span>
                      <i
                        onClick={() => deleteItem(item.id)}
                        class='ri-delete-bin-4-line'
                      ></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* ------RIght side of the cart----------- */}
            <div className={styles.cart_right}>
              <div className={styles.total_box}>
                <h3>Subtotal:</h3>
                <h2>${subTotal}</h2>
                <div className={styles.btn_box}>
                  <button className='buy_btn_2'>
                    <Link to='/shop'>Continue Shopping</Link>
                  </button>
                  <button className='buy_btn'>
                    {" "}
                    <Link to='/checkout'>Checkout</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
