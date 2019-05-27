import React from 'react';
import OrderCheckout from './OrderCheckout';
import OrderElements from './OrderElements';
import OrderHeader from './OrderHeader';

const Order = (props) => (
  <div className="content__module">

    <OrderHeader />
    <OrderElements
      order={props.order}
      handleDeleteOption={props.handleDeleteOption}
    />
    <OrderCheckout
      total={props.total}
    />
  </div>
)

export default Order;
