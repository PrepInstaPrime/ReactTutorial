import React,{useContext} from 'react'
import mycontext from '../store/mycontext'

export default function JavaScript() {
    let {user}=useContext(mycontext);
  return (
    <div>
      <h3> Hey {user}, All the best.</h3>
      <h4>Welcome to JavaScript</h4>
    </div>
  )
}
