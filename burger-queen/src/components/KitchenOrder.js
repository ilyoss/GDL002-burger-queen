import React from 'react';
import '../styles/styles.scss';
import firebase from 'firebase';
import {DB_CONFIG} from '../config/Config.js';

class KitchenOrder extends React.Component {
  constructor(){
    super();
    this.firebase = firebase.initializeApp(DB_CONFIG);
  }
  state = {
    order: []
  }

  componentDidMount(){
    firebase.database().ref('orders/').on('value', function(snapshot) {
      let array = this.snapshotToArray(snapshot);
      console.log(array);
      this.setState({
        order: array
      })
    })
  }

  snapshotToArray = (snapshot) => {
      var returnArr = [];

      snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          returnArr.push(item);
      });
      return returnArr;
  };

  render() {
    return (
      <div className="kitchen__order">
        <h3 className="order__titles">Order #1 | Time: </h3>
        {
          this.state.order.map((option, index) => (
            <p key={index} className="order__list">{option.item}</p>
          ))
        }
        <button className="order__ready">Order ready!</button>
      </div>
    );
  }
}

export default KitchenOrder;
