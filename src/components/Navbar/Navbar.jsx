import styles from "./Navbar.module.css"
import logo from "../../assets/images/Logo (12).png"
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import barsImg from "../../assets/images/Button.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileMenuOpen(false)
    })
  }, [])

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/careers"}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <img
          src={barsImg}
          className={styles.bars}
          alt=""
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </nav>
      {isMobileMenuOpen && (
        <ul className={styles.menu}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/careers"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? styles.contactActive : styles.contact
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
