import React from 'react';
import '../../styles/styles.scss';

const KitchenOrder = (props) => (
  <div className="kitchen__order">
    <h3 className="order__titles">{props.order}. {props.clients} | Time: </h3>
    {
      props.orders.map((option, index) => (
        <p key={index} className="order__list">{option.item}</p>
      ))
    }
    <button data-customer={props.clients} className="order__ready">Order ready!</button>
  </div>
);

export default KitchenOrder;
