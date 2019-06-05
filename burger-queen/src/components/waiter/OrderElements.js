import React from 'react';
import OrderElement from './OrderElement';

const OrderElements = (props) => (
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
);

export default OrderElements;
