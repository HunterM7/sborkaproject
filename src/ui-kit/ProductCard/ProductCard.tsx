import React from 'react'
import { NavLink } from 'react-router-dom'

// Utils
import { IProduct } from 'utils/types'
import { productLink } from 'utils/routes'

// Components
import { CartButton, PriceCard } from 'ui-kit'

// Styles
import styles from './ProductCard.module.scss'

const ProductCard: React.FC<IProduct> = ({ id, title, price, bigImage }) => {
  return (
    <div className={styles.wrapper}>
      <NavLink to={`${productLink}${id}`}>
        <img className={styles.image} src={bigImage} alt="Product" />
      </NavLink>

      <h4 className={styles.title}>{title}</h4>

      <div className={styles.footer}>
        <CartButton onClick={() => console.log('click')} />

        <PriceCard price={price} />
      </div>
    </div>
  )
}

export default ProductCard
