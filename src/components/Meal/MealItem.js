import React from 'react';
import './MealItem.css';

const MealItem = (props) => {
    const { name, description, price } = props;

    const addToCartHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className="meal-item">
            <div>
                <h3>{name}</h3>
                <div className="description">{description}</div>
                <div className="price">${price}</div>
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Amount:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" />
            </div>
            <button onClick={addToCartHandler}>+ Add</button>
        </form>
    );
};

export default MealItem;
