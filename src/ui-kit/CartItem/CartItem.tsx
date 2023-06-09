import React from 'react'

// Utils
import { closeIcon } from 'assets/icons'
import { IProduct } from 'utils/types'

// Components
import CartItemInfo from './CartItemInfo/CartItemInfo'

// Styles
import styles from './CartItem.module.scss'

const CartItem: React.FC<IProduct> = product => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={product.smallImage} alt="Product" />

      <CartItemInfo product={product} />

      <button className={styles.close}>{closeIcon}</button>
    </div>
  )
}

export default CartItem
