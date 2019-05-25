import React from 'react';
import OrderElement from './OrderElement';

const Order = (props) => (
  <div className="content__module">
    <div className="order-header">
      <h3 className="order-header__title">Order items</h3>
    </div>
    <div className="order__elements">
      {props.order.length === 0 && <p className="order__message">You have no items in your order yet</p>}
      {
        props.order.map((option, index) => (
          <OrderElement
            key={index}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
    <button className="button">Send order to kitchen</button>
  </div>
)

export default Order;

// {props.order.length === 0 && <p className="">You have no items in your order yet</p>}
// <p>Customer name: </p>
// <input className="order-customer" type="text" name="customer" ></input>
