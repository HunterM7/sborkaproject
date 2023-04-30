import React from 'react'

// Utils
import { IProduct } from 'utils/types'
import { fetchProducts } from 'fakeapi'
import { checkResponse } from 'utils/checkResponse'

interface IInitialState {
  products: IProduct[] | null
  isLoading: boolean
  hasError: boolean
}

export function useIngredients() {
  const initialState: IInitialState = {
    products: null,
    isLoading: true,
    hasError: false,
  }

  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {
    fetchProducts()
      .then(checkResponse<IProduct[]>)
      .then(res =>
        setState(prev => ({ ...prev, products: res, isLoading: false })),
      )
  }, [])

  return { ...state }
}
