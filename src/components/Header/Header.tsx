import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import LogoIcon from 'assets/icons/logo.svg'
import CartIcon from 'assets/icons/cart-icon.svg'

// Styles
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          <img className={styles.logoIcon} src={LogoIcon} alt="SB.shop" />
        </NavLink>

        <NavLink to="/cart" className={styles.cart}>
          <img className={styles.cartIcon} src={CartIcon} alt="Cart" />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
