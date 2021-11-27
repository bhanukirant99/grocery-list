import React from 'react'
import "./GroceryItem.css"

const GroceryItem = ({ name, price, isRed }) => {
    return (
        <div>
            {
                isRed ?
                <div className="groceryItem bgRed">
                    <div className="groceryItem__name">{name}</div>
                    <div className="groceryItem__price">{price}</div>
                </div>
                :
                <div className="groceryItem bgBlack">
                    <div className="groceryItem__name">{name}</div>
                    <div className="groceryItem__price">{price}</div>
                </div>
            }
        </div>
        
    )
}

export default GroceryItem
