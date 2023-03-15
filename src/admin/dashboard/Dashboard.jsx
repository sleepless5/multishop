import styles from "./Dashboard.module.css"
import useGetData from "../../custom-hooks/useGetData"
import { db } from "../../firebase"
import { deleteDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"
const Dashboard = () => {
  const { data, loading } = useGetData("products")
  console.log(data)
  const deleteItem = async id => {
    await deleteDoc(doc(db, "products", id))
    toast.success("item deleted")
  }
  return (
    <div className={styles.container}>
      <h2>All Products</h2>
      <div className={styles.products}>
        {loading ? (
          <h2>Loading</h2>
        ) : (
          <>
            <div className={`${styles.product_row} bold`}>
              <div>Image</div>
              <div>Title</div>
              <div>Category</div>
              <div>Price</div>
              <div>Action</div>
            </div>
            {data.map(item => (
              <div className={styles.product_row} key={item.id}>
                <div>
                  <img
                    className={styles.product_img}
                    src={item.imgUrl}
                    alt=''
                  />
                </div>
                <div>{item.productName}</div>
                <div>{item.category}</div>
                <div>${item.price}</div>
                <div className={styles.delete_icon}>
                  <i
                    onClick={() => deleteItem(item.id)}
                    class='ri-delete-bin-6-line'
                  ></i>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard
