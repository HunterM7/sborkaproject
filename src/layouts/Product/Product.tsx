import React from 'react'
import { useParams } from 'react-router-dom'

// Styles
import styles from './Product.module.scss'

const Product: React.FC = () => {
  const { id } = useParams()

  return <div>Product {id}</div>
}

export default Product
