import React from 'react'

// Utils
import { IProduct } from 'utils/types'
import { useCart } from 'hooks/useCart'

// Components
import { Counter, PriceCard } from 'ui-kit'

// Styles
import styles from './CartItemInfo.module.scss'

interface ICartItemInfo {
  product: IProduct
}

const CartItemInfo: React.FC<ICartItemInfo> = ({ product }) => {
  // Counter
  // const [count, setCount] = React.useState(0)

  const { cart, addProduct } = useCart()

  const count = cart?.find(el => el.id === product.id)?.count

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{product.title}</h5>

      <Counter
        amount={count || 0}
        increseFunc={() => addProduct(product)}
        decreseFunc={() => console.log('test')}
      />

      <PriceCard price={product.price} className={styles.price} />
    </div>
  )
}

export default CartItemInfo
