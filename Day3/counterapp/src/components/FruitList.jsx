import React from 'react'

export default function FruitList({list}) {
  return (
    <div>
      <ol>
        {list.map((ele) => (
          <li>{ele}</li>
        ))}
      </ol>
    </div>
  )
}
