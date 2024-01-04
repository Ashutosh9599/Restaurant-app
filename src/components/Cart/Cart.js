import React from 'react';
import CartContext from '../Store/CartContext';
import Modal from "../Modal/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartContext = React.useContext(CartContext); // Access cart context

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{cartContext.totalAmount}</span>
      </div>
      <div className="actions">
        <button className="close-button" onClick={props.onClose}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;