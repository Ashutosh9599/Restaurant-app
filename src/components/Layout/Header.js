import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
        <h1>ReactMeals</h1>
      <button className="cart-button"  onClick={props.onShowCart}>
        <span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span>
            <span className="cart">Your Cart</span>
            <span className="cart-count">0</span>
      </button>
    </header>
  );
};

export default Header;
