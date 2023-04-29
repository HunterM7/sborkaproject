import React from 'react'

// Utils
import { IProduct } from 'utils/types'

// Components
import { NavButton, CartButton, PriceCard } from 'ui-kit'

// Styles
import styles from './Product.module.scss'

const Product: React.FC<IProduct> = ({ id, title, price, bigImage }) => {
  return (
    <div className={styles.wrapper}>
      <NavButton to="/" title="Back in catalog" className={styles.back} />

      <img className={styles.image} src={bigImage} alt="Product" />

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>Item model number: {id}</p>

      <div className={styles.footer}>
        <CartButton onClick={() => console.log('click')} />

        <PriceCard price={price} fontSize={24} />
      </div>
    </div>
  )
}

export default Product
