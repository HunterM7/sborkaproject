import React from 'react'

// Components
import { CartList, CartTotal } from 'components'

// Styles
import styles from './CartBlock.module.scss'

const CartBlock: React.FC = () => {
  return (
    <aside className={styles.wrapper}>
      <CartList />
      <CartTotal />
    </aside>
  )
}

export default CartBlock
