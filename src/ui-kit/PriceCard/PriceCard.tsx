import React from 'react'
import cn from 'classnames'

// Utils
import priceFormatter from 'utils/priceFormatter'

// Styles
import styles from './PriceCard.module.scss'

interface IPriceCard {
  title?: string
  price: number
  fontSize?: number
  fontWeight?: 400 | 700
  className?: string
}

const PriceCard: React.FC<IPriceCard> = ({
  title,
  price,
  fontSize = 14,
  fontWeight = 400,
  className,
}) => {
  const formattedPrice = priceFormatter(price)

  return (
    <div
      style={{ fontSize, fontWeight }}
      className={cn(styles.wrapper, className)}
    >
      {title && <span>{title}</span>}
      <span>$ {formattedPrice}</span>
    </div>
  )
}

export default PriceCard
