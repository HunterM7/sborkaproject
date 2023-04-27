import React from 'react'

// Utils
import priceFormatter from 'utils/priceFormatter'

// Components
import { Counter } from 'ui-kit'

// Styles
import styles from './CartItemInfo.module.scss'

interface ICartItemInfo {
  title: string
  price: number
}

const CartItemInfo: React.FC<ICartItemInfo> = ({ title, price }) => {
  const formattedPrice = priceFormatter(price)

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

      <p className={styles.price}>$ {formattedPrice}</p>
    </div>
  )
}

export default CartItemInfo
