import { useState } from 'react'

import * as styles from './counter.module.css'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }

  return (
    <div className={styles.counter}>
      <h3>Count {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
