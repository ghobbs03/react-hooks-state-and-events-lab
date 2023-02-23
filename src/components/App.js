import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("Dark");

  function toggleButton() {
    setDarkMode(!isDarkMode);
  

    if (text === "Dark") {
      setText("Light");
    } else {
      setText("Dark");
    }
  }


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleButton}>{text} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
