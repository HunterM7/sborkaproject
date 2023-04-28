// Utils
import { IProduct } from 'utils/types'

// Products
import { productsList } from './products'

interface IFetch<T> {
  json: () => Promise<T>
}
type IFetchProduct = IFetch<IProduct>
type IFetchProducts = IFetch<IProduct[]>

export function fetchProduct(id: string) {
  return new Promise<IFetchProduct>(resolve => {
    setTimeout(() => {
      resolve({
        json() {
          return new Promise((resolve, reject) => {
            const product = productsList.find(el => el.id === id)

            if (product) {
              resolve(product)
            } else {
              reject("There's no such product!")
            }
          })
        },
      })
    }, 3000)
  })
}

export function fetchProducts() {
  return new Promise<IFetchProducts>(resolve => {
    setTimeout(() => {
      resolve({
        json() {
          return new Promise(resolve => {
            resolve(productsList)
          })
        },
      })
    }, 3000)
  })
}
