import { useState, useEffect } from "react"
import useAuth from "../../custom-hooks/useAuth"
import styles from "./AddProduct.module.css"
import { db, storage } from "../../firebase"
import { collection, addDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
const AddProduct = () => {
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState()
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [formValidated, setFormValidated] = useState(false)
  const navigate = useNavigate()

  const { currentUser } = useAuth()
  const { displayName, email, uid } = currentUser
  console.log(currentUser)

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)
    try {
      const docRef = await collection(db, "products")
      const storageRef = ref(storage, `productImages/${Date.now() + img.name}`)
      const uploadTask = uploadBytesResumable(storageRef, img)
      uploadTask.on(
        error => {
          toast.error("there is upload error")
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async DownloadURL => {
            await addDoc(docRef, {
              productName,
              desc,
              price,
              category,
              imgUrl: DownloadURL,
              userId: uid,
              userName: displayName,
              userEmail: email,
            })
          })
        }
      )
      toast.success("product successfully added")
      setLoading(false)
      setProductName("")
      setPrice()
      setCategory("")
      setDesc("")
      setImg(null)
      navigate("/")
    } catch (err) {
      setError(err.msg)
      toast.error(err.message)
    }
  }

  useEffect(() => {
    setFormValidated(productName && price && category && desc && img)
  }, [productName, price, img, desc, category])
  return (
    <div className={styles.container}>
      <h2>Add new product</h2>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='product name'
          required
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <input
          required
          value={price}
          onChange={e => setPrice(e.target.value)}
          type='number'
          placeholder=' price'
        />
        <select required onChange={e => setCategory(e.target.value)}>
          <option value=''>choose category</option>
          <option value='chair'>chair</option>
          <option value='sofa'>sofa</option>
          <option value='mobile'>mobile</option>
          <option value='watch'>watch</option>
          <option value='wireless'>wireless</option>
        </select>
        <textarea
          name=''
          id=''
          rows='5'
          placeholder='product description'
          required
          value={desc}
          onChange={e => setDesc(e.target.value)}
        ></textarea>
        <input type='file' required onChange={e => setImg(e.target.files[0])} />
        <button disabled={!formValidated} onClick={handleSubmit}>
          Add product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
