import React from 'react'
export default function Dept({name,budget,temp}) {
  return (
    <div>
        <p>This is {name} department with the budget of {budget} and team size {temp} people</p>
    </div>
  )
}
