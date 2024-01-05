import React from 'react';
import CartContext from '../Store/CartContext';
import Modal from "../Modal/Modal";
import Cartitem from './Cartitem';
import "./Cart.css";

const Cart = (props) => {
  const cartContext = React.useContext(CartContext); // Access cart context
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
  };
  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <Cartitem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>${cartContext.totalAmount}</span>
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