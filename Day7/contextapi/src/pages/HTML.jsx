import React,{useContext} from 'react'
import mycontext from '../store/mycontext'
export default function HTML() {
    let {user}=useContext(mycontext);
  return (
    <div>
      <h3> Hey {user}, All the best.</h3>
      <h4>Welcome to HTML</h4>
    </div>
  )
}
