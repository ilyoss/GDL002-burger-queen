import React from 'react';

const OrderCheckout = (props) => (
  <div className="order-bottom">
    <button className="button button--send" onClick={props.handleSendOrder}>Send order to kitchen</button>
    <h3 className="order-total">Total: ${props.total}</h3>
  </div>
);

export default OrderCheckout;
