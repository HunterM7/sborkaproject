import React from 'react'

// Utils
import { IProduct } from 'utils/types'

// Components
import { CartButton, PriceCard } from 'ui-kit'

// Styles
import styles from './ProductCard.module.scss'

const ProductCard: React.FC<IProduct> = ({ title, price, bigImage }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={bigImage} alt="Product" />

      <h4 className={styles.title}>{title}</h4>

      <div className={styles.footer}>
        <CartButton onClick={() => console.log('click')} />

        <PriceCard price={price} />
      </div>
    </div>
  )
}

export default ProductCard
