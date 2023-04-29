import { IProduct } from 'utils/types'

// Big Images
import ProductImage1_large from './images/large/product-1.png'
import ProductImage2_large from './images/large/product-2.png'
import ProductImage3_large from './images/large/product-3.png'
import ProductImage4_large from './images/large/product-4.png'
import ProductImage5_large from './images/large/product-5.png'
import ProductImage6_large from './images/large/product-6.png'

// Medium Images
import ProductImage1_medium from './images/medium/product-1.png'
import ProductImage2_medium from './images/medium/product-2.png'
import ProductImage3_medium from './images/medium/product-3.png'
import ProductImage4_medium from './images/medium/product-4.png'
import ProductImage5_medium from './images/medium/product-5.png'
import ProductImage6_medium from './images/medium/product-6.png'

// Small Images
import ProductImage1_small from './images/small/product-1.png'
import ProductImage2_small from './images/small/product-2.png'
import ProductImage3_small from './images/small/product-3.png'
import ProductImage4_small from './images/small/product-4.png'
import ProductImage5_small from './images/small/product-5.png'
import ProductImage6_small from './images/small/product-6.png'

export const productsList: IProduct[] = [
  {
    id: 'sniker-1',
    title: 'New Balance 574 Vintage Brights',
    price: 650,
    bigImage: ProductImage1_large,
    smallImage: ProductImage1_small,
    mediumImage: ProductImage1_medium,
  },
  {
    id: 'sniker-2',
    title: 'New Balance Made in UK 920 Chinese New Year',
    price: 1200,
    bigImage: ProductImage2_large,
    smallImage: ProductImage2_small,
    mediumImage: ProductImage2_medium,
  },
  {
    id: 'sniker-3',
    title: 'New Balance 373 Modern Classics',
    price: 800,
    bigImage: ProductImage3_large,
    smallImage: ProductImage3_small,
    mediumImage: ProductImage3_medium,
  },
  {
    id: 'sniker-4',
    title: 'New Balance Made in UK 670 Chinese New Year',
    price: 780,
    bigImage: ProductImage4_large,
    smallImage: ProductImage4_small,
    mediumImage: ProductImage4_medium,
  },
  {
    id: 'sniker-5',
    title: 'New Balance X-Racer Utility',
    price: 1000,
    bigImage: ProductImage5_large,
    smallImage: ProductImage5_small,
    mediumImage: ProductImage5_medium,
  },
  {
    id: 'sniker-6',
    title: 'New Balance 5740 Think Colorfully',
    price: 940,
    bigImage: ProductImage6_large,
    smallImage: ProductImage6_small,
    mediumImage: ProductImage6_medium,
  },
]
