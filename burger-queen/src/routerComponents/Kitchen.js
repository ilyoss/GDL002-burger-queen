import React from 'react';
import Navigation from './Navigation';
import KitchenOrders from '../components/kitchen/KitchenOrders';
import Header from '../components/Header';
import '../styles/styles.scss';
import firebase from '../config/Config.js';

class Kitchen extends React.Component {
  state = {
    clients: [],
    orders: []
  }

  componentDidMount(){
    this.snapshotToArray();
  }

  snapshotToArray = () => {
    let clients = [];
    let orders = [];
    firebase.database().ref('orders/').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        let customer = childSnapshot.key;
        let order = item.order;
        clients.push(customer);
        orders.push(order);
      });
    })
    .then(() => this.handleStateArrays(orders, clients));

  }

  handleStateArrays = (orders, clients) => {
    this.setState((prevState) => ({
      orders,
      clients
    }));
  }

  render() {
    return (
      <div className="App">
        <Navigation className="navigation" />
        <Header />
        <KitchenOrders
          orders={this.state.orders}
          clients={this.state.clients}
        />
      </div>
    );
  }
}
export default Kitchen;
