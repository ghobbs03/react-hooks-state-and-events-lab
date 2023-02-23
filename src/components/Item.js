import React from "react";
import { useState} from "react";

function Item({ name, category }) {
  const [className, setClassName] = useState("");
  const [stateText, setStateText] = useState("Add");


  function changeState() {
    if (className === "") {
      setStateText("Remove");
      setClassName("in-cart");

    } else {
      setStateText("Add");
      setClassName("");

    }
 
  }



  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeState}>{stateText} to Cart</button>
    </li>
  );
}

export default Item;
