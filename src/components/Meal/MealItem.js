import React from 'react';
import './MealItem.css';

const MealItem = (props) => {
    const { name, description, price } = props;

    return (
        <li className="meal-item">
            <div>
                <h3>{name}</h3>
                <div className="description">{description}</div>
                <div className="price">${price}</div>
            </div>
        </li>
    );
};

export default MealItem;
