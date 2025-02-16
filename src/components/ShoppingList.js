import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {


//function for usestate to select category
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = 
     items.filter(function (item) {
      if (selectedCategory==='All') {
        return true;
      }
      else{
        return item.category === selectedCategory;}
      })
    


//adding the event onChange
//and filtering out tht items

  return (
    <div className="ShoppingList">
      <div className="Filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

    
      <ul className="Items">
      {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
