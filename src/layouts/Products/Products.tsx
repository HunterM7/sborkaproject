import React from 'react'

// Fake API
import { productsList } from 'fakeapi/products'

// Components
import { ProductCard } from 'ui-kit'

// Styles
import styles from './Products.module.scss'

const Products = () => {
  return (
    <main className={styles.products}>
      {productsList.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </main>
  )
}

export default Products
