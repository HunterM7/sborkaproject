import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Utils
import { baseUrl, cartLink, productLink } from 'utils/routes'

// Components
import { ProductLayout, ProductsLayout } from 'layouts'

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={baseUrl} element={<ProductsLayout />} />
        <Route path={cartLink} element={<h1>Cart</h1>} />
        <Route path={`${productLink}:id`} element={<ProductLayout />} />
      </Routes>
    </>
  )
}

export default Router
