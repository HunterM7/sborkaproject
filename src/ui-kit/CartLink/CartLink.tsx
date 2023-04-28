import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import { cartIcon } from 'assets/icons'

// Styles
import styles from './CartLink.module.scss'

interface ICartLink {
  count: number
}

const CartLink: React.FC<ICartLink> = ({ count }) => {
  return (
    <NavLink data-count={count || null} to="/cart" className={styles.cart}>
      {cartIcon}
    </NavLink>
  )
}

export default CartLink
