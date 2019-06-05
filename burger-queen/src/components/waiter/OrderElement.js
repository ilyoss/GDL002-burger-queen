import React from 'react';

const OrderElement = (props) => (

  <div className="order-element">
    <p className="order-text">{props.counter} x {props.option.item}</p>
    <p className="order-price">${props.option.price}</p>
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
