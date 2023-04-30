// Products
import { productsList } from './products'

const delay = 2000

export function fetchProduct(id: string) {
  return new Promise<Response>(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
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
      } as Response)
    }, delay)
  })
}

export function fetchProducts() {
  return new Promise<Response>(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
        json() {
          return new Promise(resolve => {
            resolve(productsList)
          })
        },
      } as Response)
    }, delay)
  })
}
