import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Utils
import { baseUrl, cartLink, productLink } from 'utils/routes'

// Components
import { Product, Products } from 'layouts'

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={baseUrl} element={<Products />} />
        <Route path={cartLink} element={<h1>Cart</h1>} />
        <Route path={productLink} element={<Product />} />
      </Routes>
    </>
  )
}

export default Router
