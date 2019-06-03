import React from 'react';
import Navigation from './Navigation';
import Content from '../components/Content';
import Header from '../components/Header';
import '../styles/styles.scss';
import firebase from 'firebase';
import {DB_CONFIG} from '../config/Config.js';

class Waiter extends React.Component {
  constructor(){
    super();
    this.firebase = firebase.initializeApp(DB_CONFIG);
  }
  state = {
    order: [],
    total: 0,
    customer: ''
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
    console.log('componentWillunmount');
  }

  handleAddOrderItem = (id, price) => {
    this.setState((prevState) => ({
      order: prevState.order.concat([{item: id, price: price}]),
      total: (prevState.total + parseInt(price))
    }));

    // const arr = this.state.order;
    // const unique = arr.map(e => e['item'])
    //   // store the keys of the unique objects
    //   .map((e, i, final) => final.indexOf(e) === i && i)
    //   // eliminate the dead keys & store unique objects
    //   .filter(e => arr[e]).map(e => arr[e]);
    //
    // console.log(arr);
    // console.log(unique);
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      order: prevState.order.filter((option) => optionToRemove !== option),
      total: (prevState.total - parseInt(optionToRemove.price))
    }));
  }

  handleSendOrder = () => {
    let database = firebase.database();
    let order = this.state.order;
    let total = this.state.total;
    let customer = document.getElementById('input').value;
    console.log(order);
    console.log(customer);
    writeUserData(customer, order, total);
    this.handleCleanOrder();

    function writeUserData(customer, order, total) {
      firebase.database().ref('orders/' + customer).set({
        order: order,
        total: total
      });
    }
  }

  handleCleanOrder = () => {
    this.setState((prevState) => ({
      order: [],
      total: 0,
      customer: ''
    }));
    document.getElementById('input').value = '';

  }

  render() {
    return (
      <div className="App">
        <Navigation className="navigation" />
        <Header />
        <Content
          order={this.state.order}
          total={this.state.total}
          handleAddOrderItem={this.handleAddOrderItem}
          handleDeleteOption={this.handleDeleteOption}
          handleElementCounter={this.handleElementCounter}
          handleSendOrder={this.handleSendOrder}
        />
      </div>
    );
  }
}
export default Waiter;
