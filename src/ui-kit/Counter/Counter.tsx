import React from 'react'

// Styles
import styles from './Counter.module.scss'

interface ICounter {
  amount: number
  increseFunc: () => void
  decreseFunc: () => void
}

const Counter: React.FC<ICounter> = ({ amount, increseFunc, decreseFunc }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={decreseFunc}></button>

      <span>{amount}</span>

      <button className={styles.button} onClick={increseFunc}></button>
    </div>
  )
}

export default Counter
