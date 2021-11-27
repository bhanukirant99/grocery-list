import React, { useState, useEffect } from 'react';
import './App.css';
import GroceryItem from './components/GroceryItem/GroceryItem';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [groceryList, setGroceryList] = useState([{name: "banana", price: "20", quantity: 1, isRed: true}]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  useEffect(() => {

  }, [groceryList])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const clearAllItems = () => {
    setGroceryList([]);
  }

  const handleInputNameChange = (event) => {
    setName(event.target.value);
  }

  const handleInputPriceChange = (event) => {
    setPrice(event.target.value);
  }

  const addItemToList = (event) => {
    groceryList.filter( item => {
      if(item.name === name) {
        item.quantity += 1;
      } else {
          setGroceryList([...groceryList, {
            name,
            price,
            quantity: 1,
            isRed: false
          }])
      }
    })
    console.log(groceryList)
    event.preventDefault();
  }

  const changeBackgroundColor = (name) => {
    console.log(name)
    groceryList.forEach( item => {
      if(item.name === name) {
        item.isRed = !item.isRed;
      }
    })
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
        {groceryList.map((item) => (
          // <li key={item.name}>
          //   {item}
          // </li>
            <GroceryItem name={ item.name } price={ item.price } quantity={ item.quantity } isRed = { item.isRed } changeBackgroundColor={ changeBackgroundColor }/>
          ))}
      </div>
    </div>
  );
}

export default App;