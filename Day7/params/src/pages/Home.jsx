import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    let navigate = useNavigate();
    let frontedHandler=()=>{
        navigate('/frontend');
    }
    let backendHandler=()=>{
        navigate('/backend');
    }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={frontedHandler}>Frontend</button>
      <button onClick={backendHandler}>Backend</button>
    </div>
  )
}
