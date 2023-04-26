import React from 'react'

// Fake API
import { productsList } from 'fakeapi/products'

// Components
import { ProductCard } from 'ui-kit'

// Styles
import styles from './Products.module.scss'

const Products = () => {
  return (
    <div>
      {productsList.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}

export default Products
