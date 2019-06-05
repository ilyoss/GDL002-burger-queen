import React from 'react';
import Menu from './waiter/Menu';
import Order from './waiter/Order';

const Content = (props) => (
  <div className="content">
    <Menu
      handleAddOrderItem={props.handleAddOrderItem}
      visibility={props.visibility}
    />
    <Order
      order={props.order}
      total={props.total}
      handleDeleteOption={props.handleDeleteOption}
      handleElementCounter={props.handleElementCounter}
      handleSendOrder={props.handleSendOrder}
    />
  </div>
);

export default Content;
