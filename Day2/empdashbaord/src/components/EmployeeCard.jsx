import React from 'react'
export default function EmployeeCard(props) {
    // here props is an object with key value pair
  return (
    <div>
      <h1>Hey my name is {props.name} and i am {props.age} years old. My saley is {props.salary} </h1>
      {/* when you want to write js in html then use {} braces */}
    </div>
  )
}
