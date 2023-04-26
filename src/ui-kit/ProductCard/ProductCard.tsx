import React from 'react'

// Utils
import { IProduct } from 'utils/types'

// Components
import CartButton from '../CartButton/CartButton'

// Styles
import styles from './ProductCard.module.scss'

const ProductCard: React.FC<IProduct> = ({ name, price, image }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt="Product" />

      <h4 className={styles.title}>{name}</h4>

      <div className={styles.footer}>
        <CartButton onClick={() => console.log('click')} />

        <p className={styles.price}>{`$ ${price}`}</p>
      </div>
    </div>
  )
}

export default ProductCard
