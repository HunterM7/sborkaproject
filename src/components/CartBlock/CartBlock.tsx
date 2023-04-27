import React from 'react'

// Components
import { CartList } from 'components'

// Styles
import styles from './CartBlock.module.scss'

const CartBlock: React.FC = () => {
  return (
    <aside className={styles.wrapper}>
      <CartList />
    </aside>
  )
}

export default CartBlock
