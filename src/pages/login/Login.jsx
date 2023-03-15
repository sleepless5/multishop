import styles from "./Login.module.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
      toast.success("logged in")

      navigate("/")
    } catch (err) {
      toast.error("error logging in")
    }
  }
  return (
    <div className={styles.container}>
      <h2>Login</h2>{" "}
      <form className={styles.form}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text'
          placeholder='enter email'
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          placeholder='enter password'
        />
        <button onClick={login}>Login</button>
      </form>
      <p>
        Don't have account? <Link to='/signup'>Sign up</Link> here
      </p>
    </div>
  )
}

export default Login
