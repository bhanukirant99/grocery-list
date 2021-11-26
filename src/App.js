import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <div className="app__addListItem">
        <h1 type="button" className="app__addListItemButton" onClick={togglePopup}>Add</h1>
      </div>
      <div className="app__groceryListItemsControl">
        <h2>
          My Grocery List Items
        </h2>
        <h2 className="app__groceryListItemsRemove">
          Remove All items From List
        </h2>
      </div>
    </div>
  );
}

export default App;