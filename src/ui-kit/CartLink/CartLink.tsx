import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

// Assets
import { cartIcon } from 'assets/icons'

// Styles
import styles from './CartLink.module.scss'

interface ICartLink {
  count: number
}

const CartLink: React.FC<ICartLink> = ({ count }) => {
  return (
    <NavLink
      data-count={count}
      to="/cart"
      className={cn(styles.cart, count && styles.cart_counted)}
    >
      {cartIcon}
    </NavLink>
  )
}

export default CartLink
