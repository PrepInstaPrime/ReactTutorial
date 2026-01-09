import React from 'react'
import styles from './FruitList.module.css'
export default function FruitList({list}) {
  return (
    <div>
      <ol className={styles.author}>
        {list.map((ele,idx) => (
          <li key={idx}>{ele}</li>
        ))}
      </ol>
    </div>
  )
}
