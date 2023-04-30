import React from 'react'

// Utils
import { ICartProduct, IProduct } from 'utils/types'

interface IInitialState {
  cart: ICartProduct[] | null
  isLoading: boolean
  hasError: boolean
}

export function useCart() {
  const initialState: IInitialState = {
    cart: null,
    isLoading: true,
    hasError: false,
  }
  const [state, setState] = React.useState(initialState)

  function addProduct(product: IProduct) {
    setState(prev => {
      if (!prev.cart) {
        const newCart: ICartProduct[] = [{ ...product, count: 1 }]

        return { ...prev, cart: newCart }
      } else {
        const index = prev.cart.findIndex(el => el.id === product.id)
        const newCart = [...prev.cart]

        if (index >= 0) {
          newCart.splice(index, 0, {
            ...product,
            count: prev.cart[index].count + 1,
          })
        } else {
          newCart.push({ ...product, count: 1 })
        }

        return { ...prev, cart: newCart }
      }
    })
  }

  return { ...state, addProduct }
}
