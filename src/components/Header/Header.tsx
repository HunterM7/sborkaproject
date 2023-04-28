import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import { logoIcon, cartIcon } from 'assets/icons'

// Components
import { CartLink } from 'ui-kit'

// Styles
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          {logoIcon}
        </NavLink>

        <CartLink count={1} />
      </div>
    </header>
  )
}

export default Header
