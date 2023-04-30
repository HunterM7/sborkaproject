import React from 'react'

// Utils
import { useIngredients } from 'hooks/useIngredients'

// Components
import { Loader } from 'ui-kit'
import { ProductsList } from 'components'

// Styles
import styles from './ProductsLayout.module.scss'

const ProductsLayout = () => {
  const { products, isLoading, hasError } = useIngredients()

  return (
    <main className={styles.products}>
      {isLoading ? (
        <Loader />
      ) : hasError || !products ? (
        <h2>Что-то пошло не так</h2>
      ) : (
        <ProductsList products={products} />
      )}
    </main>
  )
}

export default ProductsLayout
