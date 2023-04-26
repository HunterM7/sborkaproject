import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import { logoIcon, cartIcon } from 'assets/icons'

// Styles
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          {logoIcon}
        </NavLink>

        <NavLink to="/cart" className={styles.cart}>
          {cartIcon}
        </NavLink>
      </div>
    </header>
  )
}

export default Header
