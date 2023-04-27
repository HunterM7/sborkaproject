import React from 'react'

// Components
import { PriceCard } from 'ui-kit'

// Styles
import styles from './CartTotal.module.scss'

const CartTotal: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <PriceCard price={1850} title="Subtotal" />
      <PriceCard price={100} title="Tax" />
      <PriceCard price={150} title="Shipping" />
      <PriceCard price={2100} title="Total" fontSize={18} fontWeight={700} />
    </div>
  )
}

export default CartTotal
