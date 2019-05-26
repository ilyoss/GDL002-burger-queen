import React from 'react';
import Menu from './Menu';
import Order from './Order';

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
    />
  </div>
);

export default Content;
