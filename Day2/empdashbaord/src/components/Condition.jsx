import React from "react";
// conditional rendering based on if else
/*
export default function Condition({ login }) {
  if (login) {
    return <div>Welcome to home page</div>;
  }else{
    return <div>Please login first</div>;
  }
}
*/
// conditional rendering with the help of logical operator 
/*
export default function Condition({login}){
    return (
        <>
         {!login&&<p>Please login first</p>}
        </>
    )
}*/

// conditional rendering with ternary operator

export default function Condtion({login}){
    return(
        <>
            {login?<p>Welcome to home page</p>:<p>Please login first</p>}
        </>
    )
}