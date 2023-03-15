import styles from "./AdminNav.module.css"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import useAuth from "../../custom-hooks/useAuth"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { toast } from "react-toastify"

const menuLinks = [
  {
    display: "Dashboard",
    link: "dashboard",
  },
  {
    display: "Add Product",
    link: "dashboard/addproduct",
  },

  {
    display: "Users",
    link: "/dashboard/users",
  },
]
const AdminNav = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  const showMenu = () => {
    menuRef.current.classList.add("show")
  }
  const hideMenu = () => {
    menuRef.current.classList.remove("show")
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        setShowUserMenu(false)
        toast.success("user logged out")
        navigate("/")
      })
      .catch(err => {
        toast.error("error with logging out")
      })
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(styles.header_shrink)
      } else {
        headerRef.current.classList.remove(styles.header_shrink)
      }
    })

    return () => window.removeEventListener("scroll", () => {})
  }, [])

  return (
    <header ref={headerRef}>
      <div className='main_container'>
        <div className={styles.header}>
          <div className={styles.logo_container}>
            <Link to='/'>
              <h1>MultiShop</h1>
            </Link>
          </div>
          <div ref={menuRef} className={styles.navigation}>
            <nav className={styles.nav}>
              <ul className={styles.menu}>
                <button onClick={hideMenu} className={styles.close_btn}>
                  X
                </button>
                {menuLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      className={styles.menu_link}
                      onClick={hideMenu}
                      to={item.link}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.icons_container}>
            <span className={styles.user_box}>
              <img
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={styles.user_avatar}
                src={currentUser.photoURL}
                alt=''
              />

              {showUserMenu && (
                <ul className={styles.user_menu}>
                  <>
                    <li onClick={logout}>Logout</li>
                  </>
                </ul>
              )}
            </span>
            <span className={styles.logout_icon}>
              <i onClick={logout} class='ri-logout-box-line'></i>
            </span>

            <span onClick={showMenu} className={styles.mobile_menu}>
              <i class='ri-menu-fill'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminNav
