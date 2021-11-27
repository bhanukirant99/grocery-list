import React from 'react'
import "./GroceryItem.css"

const GroceryItem = ({ name, price, quantity, isRed, changeBackgroundColor }) => {
    return (
        <div>

                <div className={`groceryItem ${isRed ? 'bgRed': 'bgBlack'}`} onClick={() => changeBackgroundColor(name) }>
                    <div className="groceryItem__name">{name}</div>
                    <div className="groceryItem__price">{price}</div>
                    <div className="groceryItem__quantity">{quantity}</div>
                </div>
        </div>
        
    )
}

export default GroceryItem
