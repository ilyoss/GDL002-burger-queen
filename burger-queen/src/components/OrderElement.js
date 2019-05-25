import React from 'react';

const OrderElement = (props) => (
  <div className="order-element">
    <p className="order-text">x</p>
    <p className="order-text">{props.optionText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        {props.handleDeleteOption(props.optionText)}
      }}
    >
      Remove
    </button>
  </div>
);

export default OrderElement;
