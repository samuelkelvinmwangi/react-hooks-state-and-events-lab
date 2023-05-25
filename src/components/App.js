import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass ? 'App dark' : 'App light'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Dark' : 'Light'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
