import React from "react";
import FruitList from "./components/FruitList";
export default function App() {
  let arr = ["Grapes","Apple", "Mango", "Oranges", "PineApple", "Watermelon"];
  return (
    <div>
      <FruitList list={arr}/>
    </div>
  );
}
