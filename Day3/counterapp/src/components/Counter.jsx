import React,{useState} from 'react'

export default function Counter({setClk,clk}) {
//   let count=0;
let [count,setCount]=useState(0);
  function handleClick(){
    // count=count+1;
    setCount(count+1);
    setClk(clk+2);
    console.log(count)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase count</button>
    </div>
  )
}
