import React from "react";
import FruitList from "./components/FruitList";
import Author from "./components/Author";
export default function App() {
  let arr = ["Grapes","Apple", "Mango", "Oranges", "PineApple", "Watermelon"];
  return (
    <div>
      <FruitList list={arr}/>
      <Author/>
    </div>
  );
}
