import React from 'react';

const OrderElement = (props) => (
  
  <div className="order-element">
    <p className="order-text">x {props.option[0]}</p>
    <p className="order-price">${props.option[1]}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        {props.handleDeleteOption(props.option)}
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  </div>
);

export default OrderElement;
