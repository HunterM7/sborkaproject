import { IProduct } from 'utils/types'

// Images
import ProductImage1 from './images/product-1.png'
import ProductImage2 from './images/product-2.png'
import ProductImage3 from './images/product-3.png'
import ProductImage4 from './images/product-4.png'
import ProductImage5 from './images/product-5.png'
import ProductImage6 from './images/product-6.png'

export const productsList: IProduct[] = [
  { name: 'New Balance 574 Vintage Brights', price: 650, image: ProductImage1 },
  {
    name: 'New Balance Made in UK 920 Chinese New Year',
    price: 1200,
    image: ProductImage2,
  },
  { name: 'New Balance 373 Modern Classics', price: 800, image: ProductImage3 },
  {
    name: 'New Balance Made in UK 670 Chinese New Year',
    price: 780,
    image: ProductImage4,
  },
  { name: 'New Balance X-Racer Utility', price: 1000, image: ProductImage5 },
  {
    name: 'New Balance 5740 Think Colorfully',
    price: 940,
    image: ProductImage6,
  },
]
