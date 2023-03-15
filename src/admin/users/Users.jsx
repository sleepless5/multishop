import styles from "./Users.module.css"
import useGetData from "../../custom-hooks/useGetData"
import { db } from "../../firebase"
import { doc, deleteDoc } from "firebase/firestore"
const Users = () => {
  const { data: users, loading } = useGetData("users")

  const deleteItem = async id => {
    await deleteDoc(doc(db, "users", id))
  }
  return (
    <div className={styles.container}>
      <h2>Users</h2>
      <div className={styles.users}>
        <div className={`${styles.user_row} bold`}>
          <div>User Image</div>
          <div>Username</div>
          <div>User Email</div>
          <div>Delete</div>
        </div>
        {users.map(item => (
          <div className={styles.user_row}>
            <div>
              <img src={item.photoURL} alt='' />
            </div>
            <div>{item.displayName}</div>
            <div>{item.email}</div>
            <div>
              {" "}
              <i
                onClick={() => deleteItem(item.id)}
                class='ri-delete-bin-6-line'
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
