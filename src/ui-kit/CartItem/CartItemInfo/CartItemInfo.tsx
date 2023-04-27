import React from 'react'

// Components
import { Counter, PriceCard } from 'ui-kit'

// Styles
import styles from './CartItemInfo.module.scss'

interface ICartItemInfo {
  title: string
  price: number
}

const CartItemInfo: React.FC<ICartItemInfo> = ({ title, price }) => {
  // Counter
  const [count, setCount] = React.useState(0)

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}</h5>

      <Counter
        amount={count}
        increseFunc={() => setCount(count + 1)}
        decreseFunc={() => setCount(count - 1)}
      />

      <PriceCard price={price} className={styles.price} />
    </div>
  )
}

export default CartItemInfo
