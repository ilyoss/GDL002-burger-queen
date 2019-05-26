import React from 'react';
import OrderElement from './OrderElement';

const Order = (props) => (
  <div className="content__module">
    <div className="order-header">
      <h3 className="order-header__title">Order items</h3>
      <p className="order-header__title">Client's name: </p>
      <input className="order-header__input"></input>
    </div>
    <div className="order__elements">
      {props.order.length === 0 && <p className="order__message">You have no items in your order yet</p>}
      {
        props.order.map((option, index) => (
          <OrderElement
            counter={1}
            key={index}
            option={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
    <div className="order-bottom">
      <button className="button button--send">Send order to kitchen</button>
      <h3 className="order-total">Total: ${props.total}</h3>
    </div>
  </div>
)

export default Order;

// {props.order.length === 0 && <p className="">You have no items in your order yet</p>}
// <p>Customer name: </p>
// <input className="order-customer" type="text" name="customer" ></input>
