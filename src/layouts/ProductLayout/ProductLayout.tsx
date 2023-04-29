import React from 'react'
import { useParams } from 'react-router-dom'

// Utils
import { IProduct } from 'utils/types'
import { fetchProduct } from 'fakeapi'
import { checkResponse } from 'utils/checkResponse'

// Components
import { Loader } from 'ui-kit'

// Styles
import styles from './ProductLayout.module.scss'
import { Product } from 'components'

const ProductLayout: React.FC = () => {
  const { id } = useParams()

  const [product, setProduct] = React.useState<IProduct | null>(null)

  React.useEffect(() => {
    if (id) {
      fetchProduct(id)
        .then(checkResponse<IProduct>)
        .then(res => setProduct(res))
    }
  }, [id])

  return (
    <div className={styles.wrapper}>
      {!product ? <Loader /> : <Product {...product} />}
    </div>
  )
}

export default ProductLayout
