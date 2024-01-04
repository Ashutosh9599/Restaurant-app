import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = ({ onCartClick }) => {
  return (
    <header className="header">
      <div className="left-side">
        <h1>ReactMeals</h1>
      </div>
      <button className="cart-button" onClick={onCartClick}>
        <div className="right-side">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart">Your Cart</span>
            <span className="cart-count">0</span>
          </div>
        </div>
      </button>
    </header>
  );
};

export default Header;
