import React, { useState } from 'react';
import './App.css';
import GroceryItem from './components/GroceryItem/GroceryItem';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [groceryList, setGroceryList] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const clearAllItems = () => {
    setGroceryList({});
  }

  const handleInputNameChange = (event) => {
    setName(event.target.value);
  }

  const handleInputPriceChange = (event) => {
    setPrice(event.target.value);
  }

  const addItemToList = (event) => {
    const groceryListClone = {...groceryList};
    if(groceryListClone[name]) {
      groceryListClone[name].quantity += 1;
    } else {
      groceryListClone[name] = {
        price,
        quantity: 1,
        isBought: false,
      }
    }
    setGroceryList(groceryListClone);
    console.log(groceryList)
    event.preventDefault();
  }

  const changeBackgroundColor = (name) => {
    const groceryListClone = {...groceryList};
    groceryListClone[name].isBought = !groceryListClone[name].isBought;
    setGroceryList(groceryListClone)
    console.log(groceryList)
  }

  return (
    <div className="app">
      <div className="app__addListItem">
        <h1 type="button" className="app__addListItemButton" onClick={togglePopup}>Add</h1>
      </div>
      <div className="app__groceryListItemsControl">
        <h2>
          My Grocery List Items:
        </h2>
        <h2 className="app__groceryListItemsRemove" onClick={ clearAllItems }>
          Remove All items From List
        </h2>
      </div>

      {isOpen && 
        <div className="addToList">
            <div className="addToListBlock">
                <div className="addToListBlock__close" onClick={togglePopup}>
                    X
                </div>
                <form className="addToList__form">
                    <label htmlFor="" className="name">Name: <input type="text" value={ name } onChange={handleInputNameChange}/></label>
                    <label htmlFor="" className="price">Price: <input type="text" value={ price } onChange={handleInputPriceChange}/></label>
                    <input type="submit" onClick={ addItemToList } id="addToList__submit" value="Add To List "/>
                </form>
            </div>
        </div>
      }

      <div className="app__groceryList">
        { Object.entries(groceryList).length > 0 && Object.keys(groceryList).map((key) => (
            <GroceryItem name={ key } price={ groceryList[key].price } quantity={ groceryList[key].quantity } isBought = { groceryList[key].isBought } changeBackgroundColor={ changeBackgroundColor }/>
          ))}
      </div>
    </div>
  );
}

export default App;