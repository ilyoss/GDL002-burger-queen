import React from 'react';

const OrderHeader = () => (
  <div className="order-header">
    <h3 className="order-header__title">Order items</h3>
    <p className="order-header__title">Client's name: </p>
    <input className="order-header__input" id="input"></input>
  </div>
);

export default OrderHeader;
