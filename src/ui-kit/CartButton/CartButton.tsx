import React from 'react'

// Assets
import { cartIcon } from 'assets/icons'

// Styles
import styles from './CartButton.module.scss'

interface ICartButton {
  onClick: () => void
}

const CartButton: React.FC<ICartButton> = ({ onClick }) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      {cartIcon}
    </button>
  )
}

export default CartButton
