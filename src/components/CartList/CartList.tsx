import React from 'react'

// Utils
import { productsList } from 'fakeapi/products'

// Components
import { CartItem } from 'ui-kit'

// Styles
import styles from './CartList.module.scss'

const CartList = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>My basket</h3>

      <div className={styles.list}>
        {productsList.map((product, index) => (
          <CartItem key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default CartList
