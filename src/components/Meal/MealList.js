import React from 'react';
import { useCart } from '../Store/CartContext';
import MealItem from './MealItem';
import "./MealList.css";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Biryani',
      description: 'Spiced rice with chicken',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Paneer Tikka',
      description: 'Marinated and grilled cottage cheese',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Masala Dosa',
      description: 'Thin rice crepe filled with spiced potatoes',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Butter Chicken',
      description: 'Creamy tomato-based curry with chicken',
      price: 20.99,
    },
    {
      id: 'm5',
      name: 'Chole Bhature',
      description: 'Chickpea curry with fried bread',
      price: 15.99,
    },
    {
      id: 'm6',
      name: 'Palak Paneer',
      description: 'Spinach curry with cottage cheese',
      price: 16.99,
    },
  ];

  const Meallist = () => {
    const cartCtx = useCart();
  
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        onAddToCart={cartCtx.addItem}
      />
    ));
  
    return (
      <div>
        <ul className="MealList">{mealsList}</ul>
      </div>
    );
  };
  
  export default Meallist;
