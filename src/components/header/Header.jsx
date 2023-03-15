import styles from "./Header.module.css"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import useAuth from "../../custom-hooks/useAuth"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"

const menuLinks = [
  {
    display: "Home",
    link: "/home",
  },
  {
    display: "Shop",
    link: "/shop",
  },
  {
    display: "Cart",
    link: "/cart",
  },
  {
    display: "Contact",
    link: "/contact",
  },
]
const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

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
  console.log(currentUser)
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
                    <NavLink
                      className={navClass =>
                        navClass.isActive ? styles.active_menu : ""
                      }
                      to={item.link}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.icons_container}>
            <span className={styles.cart}>
              <i class='ri-shopping-cart-2-line'></i>
              <span className={styles.cart_items}>{totalQuantity}</span>
            </span>
            <span className={styles.user_box}>
              {currentUser ? (
                <img
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={styles.user_avatar}
                  src={currentUser.photoURL}
                  alt=''
                />
              ) : (
                <i
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  class='ri-user-line'
                ></i>
              )}

              {showUserMenu && (
                <ul className={styles.user_menu}>
                  {currentUser ? (
                    <>
                      <li>
                        <Link to='/dashboard'>Dashboard</Link>
                      </li>
                      <li onClick={logout}>Logout</li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to='/login'>Login</Link>
                      </li>
                      <li>
                        <Link to='/signup'>Signup</Link>
                      </li>
                    </>
                  )}
                </ul>
              )}
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

export default Header
