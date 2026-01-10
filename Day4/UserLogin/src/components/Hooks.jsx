import React, { useEffect,useMemo,useState } from 'react'

export default function Hooks() {
    let [time, setTime]=useState(0);
    let n=5;
    useEffect(()=>{
        let interval=setInterval(()=>{
            // console.log(time)
            setTime(time+1);
        },1000);
        return ()=> clearInterval(interval)
    },[time])

    let fact=useMemo(()=>{
        let res=1;
        for(let i=1;i<=n;i++){
            res=res*i;
        }
        return res;
    },[n])
  return (
    <div>
       <h3>Timer</h3>
       <p>{time}</p>
       <p>{`Factorial of ${n} is ${fact}`}</p>
    </div>
  )
}
