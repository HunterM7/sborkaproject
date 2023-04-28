import React from 'react'

// Router
import Router from 'Router/Router'

// Components
import { Header, CartBlock } from 'components'

function App() {
  return (
    <>
      <Header />
      <Router />
      <CartBlock />
    </>
  )
}

export default App
