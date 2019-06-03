import React from 'react';
import Navigation from './Navigation';
import KitchenOrders from '../components/KitchenOrders';
import Header from '../components/Header';
import '../styles/styles.scss';
import firebase from 'firebase';

class Kitchen extends React.Component {
  constructor(){
    super();
  }
  state = {
    order: []
  };

  // Lifecycle methods
  componentDidMount(){
    try {
      const json = localStorage.getItem('order');
      const total = JSON.parse(localStorage.getItem('total'));
      const order = JSON.parse(json);

      if(order) {
        this.setState(() => ({ order, total }));
      }
    } catch (e) {
      // Do nothing at all if JSON data is invalid
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.order.length !== this.state.order.length) {
      const json = JSON.stringify(this.state.order);
      const total = JSON.stringify(this.state.total)
      localStorage.setItem('order', json);
      localStorage.setItem('total', total);
    }
  }

  componentWillUnmount(){
    // console.log('componentWillunmount');
  }

  render() {
    return (
      <div className="App">
        <Navigation className="navigation" />
        <Header />
        <KitchenOrders
          order={this.state.order}
        />
      </div>
    );
  }
}
export default Kitchen;
