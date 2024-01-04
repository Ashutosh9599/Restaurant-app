// MealItem.js

import React from 'react';
import MealForm from './MealForm';
import './MealItem.css';

const MealItem = (props) => {
    const { name, description, price } = props;
    return (
        <li className="meal-item">
            <div className="meal-details">
                <div>
                    <h3>{name}</h3>
                    <div className="description">{description}</div>
                    <div className="price">${price}</div>
                </div>
                <div className="form-container">
                    <MealForm />
                </div>
            </div>
        </li>
    );
};

export default MealItem;
