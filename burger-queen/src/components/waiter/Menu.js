import React from 'react';
import Tab from './Tab'
import Breakfast from '../data/breakfast.json';
import Lunch from '../data/lunch.json';

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleAddOrderItem = this.handleAddOrderItem.bind(this);
    this.state = {
      visibility: true
    }
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  handleAddOrderItem = (e) => {
    e.preventDefault();
    const item = e.target.dataset.item;
    const price = e.target.dataset.price;
    const error = this.props.handleAddOrderItem(item, price);
    this.setState(() => ({ error }));
  }

  render(){
    return (
      <div className="content__module">
        <Tab handleToggleVisibility={this.handleToggleVisibility} />

        <div className="menu__container">

          {this.state.visibility ?
            (Breakfast.map((option, index) => (
              <button
                className="button"
                key={option.id}
                data-counter={1}
                data-item={option.item}
                data-price={option.price}
                onClick={this.handleAddOrderItem}
              >
                {option.item}: ${option.price}
              </button>))
            ) : (
              Lunch.map((option, index) => (
                <button
                  className="button"
                  key={option.id}
                  data-counter={1}
                  data-item={option.item}
                  data-price={option.price}
                  onClick={this.handleAddOrderItem}
                >
                  {option.item}: ${option.price}
                </button>))
            )
          }
        </div>

      </div>
    );
  }
}

export default Menu;
