import React from 'react'
import { useParams } from 'react-router-dom'

// Styles
import styles from './ProductLayout.module.scss'

const ProductLayout: React.FC = () => {
  const { id } = useParams()

  return <div>ProductLayout {id}</div>
}

export default ProductLayout
