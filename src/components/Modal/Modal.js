import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; 

const Modal = ({ onClose, meals, totalAmount }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <h2>Your Cart</h2>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              {meal.name} - ${meal.price}
            </li>
          ))}
        </ul>
        <p>Total: ${totalAmount}</p>
        <button>Order</button>
        <button>Cancel</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
