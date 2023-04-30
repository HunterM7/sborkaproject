import { IProduct } from 'utils/types'

type TActionTypes = 'ADD_ITEM' | 'DELETE_ITEM'

interface IAction {
  type: TActionTypes
  payload: IProduct
}

interface IInitialState {
  products: IProduct[] | null
}

const initialState: IInitialState = {
  products: null,
}

export function Reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case 'ADD_ITEM':
      return state

    case 'DELETE_ITEM':
      return state

    default:
      return state
  }
}
