import React from 'react'

// Utils
import { IProduct } from 'utils/types'
import priceFormatter from 'utils/priceFormatter'

// Components
import CartButton from '../CartButton/CartButton'

// Styles
import styles from './ProductCard.module.scss'

const ProductCard: React.FC<IProduct> = ({ title, price, image }) => {
  const formattedPrice = priceFormatter(price)

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt="Product" />

      <h4 className={styles.title}>{title}</h4>

      <div className={styles.footer}>
        <CartButton onClick={() => console.log('click')} />

        <p className={styles.price}>$ {formattedPrice}</p>
      </div>
    </div>
  )
}

export default ProductCard
