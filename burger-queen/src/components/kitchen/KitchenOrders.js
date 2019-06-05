import React from 'react';
import '../../styles/styles.scss';
import KitchenOrder from './KitchenOrder';

class KitchenOrders extends React.Component {
  render() {
    let orders = [];
    for(let i = 0; i < this.props.orders.length; i++){
      orders.push(
        <KitchenOrder
          key={i}
          order={i+1}
          orders={this.props.orders[i]}
          clients={this.props.clients[i]}
        />
      );
    }
    return (
      <div className="kitchen">
        {orders}
      </div>
    );
  }
}

export default KitchenOrders;
