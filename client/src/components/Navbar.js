import React from 'react'
import styles from '../App.css'
import logo from '../assets/logo192.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.left}>
      <Link to='/'>
        <img src={logo} alt='logo' height={60} width={60} />
      </Link>
      </div>
      <ul className={styles.outerList}>
        <li className={styles.listItem}>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to='/services'>
            Services
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to='/contact'>
            Contact
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to='/login'>
            Login
          </Link>

        </li>

      </ul>
    </nav>
  )
}

export default Navbar
