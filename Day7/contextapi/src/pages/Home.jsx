import React,{useContext} from 'react'
import Dashboard from '../components/Dashboard'
import Mycontext from '../store/mycontext'
export default function Home() {
    let {user}=useContext(Mycontext);
    console.log(user)
  return (
    <div>
      <Dashboard username={user}/>
    </div>
  )
}
