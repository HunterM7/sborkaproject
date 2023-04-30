export interface IProduct {
  id: string
  title: string
  price: number
  smallImage: string
  mediumImage: string
  bigImage: string
}

export interface ICartProduct {
  id: string
  title: string
  price: number
  smallImage: string
  mediumImage: string
  bigImage: string
  count: number
}
