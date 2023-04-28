import React from 'react'

// Router
import Router from 'Router/Router'

// Components
import { Header, CartBlock } from 'components'
import { fetchProduct, fetchProducts } from 'fakeapi'

function App() {
  React.useEffect(() => {
    fetchProducts()
      .then(res => res.json())
      .then(json => console.log(json))

    fetchProduct('sniker-3')
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])

  return (
    <>
      <Header />
      <Router />
      <CartBlock />
    </>
  )
}

export default App
