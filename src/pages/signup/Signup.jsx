import styles from "./Signup.module.css"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { auth, storage, db } from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { toast } from "react-toastify"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [userCred, setUserCred] = useState({})

  const fileRef = useRef(null)
  const navigate = useNavigate()

  const clickFile = () => {
    fileRef.current.click()
  }

  const signup = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userInfo.user

      const storageRef = ref(storage, `images/${Date.now() + userName}`)

      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        error => {
          toast.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            })
          })
        }
      )
      setLoading(false)
      toast.success("account created")
      navigate("/")
    } catch (err) {
      setLoading(false)
      toast.error("there is a problem")
    }
  }

  return (
    <div className={styles.container}>
      <h2>Signup</h2>{" "}
      <form className={styles.form}>
        <input
          type='text'
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder='enter name'
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text'
          required
          placeholder='enter email'
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          required
          placeholder='enter password'
        />
        <div onClick={clickFile} className={styles.profile_box}>
          <i class='ri-upload-line'></i> <span> upload Profile image </span>
        </div>
        <input
          onChange={e => setFile(e.target.files[0])}
          ref={fileRef}
          type='file'
        />
        <button onClick={signup}>Signup</button>
      </form>
      <p>
        Already have account? <Link to='/login'>Login</Link> here
      </p>
    </div>
  )
}

export default Signup
