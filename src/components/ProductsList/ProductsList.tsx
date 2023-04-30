import React from 'react'

// Utils
import { IProduct } from 'utils/types'

// Components
import { ProductCard } from 'ui-kit'

interface IProductsList {
  products: IProduct[]
}

const ProductsList: React.FC<IProductsList> = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </>
  )
}

export default ProductsList
