import React from 'react';
import Breakfast from './data/breakfast.json';

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOrderItem = this.handleAddOrderItem.bind(this);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
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
    const item = e.target.name;
    const error = this.props.handleAddOrderItem(item);
    this.setState(() => ({ error }));
  }

  render(){
    return (
      <div className="content__module">
        <div className="tab">
          <button className="button button--tab" autoFocus={true} onClick={this.handleToggleVisibility}>Breakfast</button>
          <button className="button button--tab" onClick={this.handleToggleVisibility}>Lunch</button>
        </div>

        <div className="menu__container">

          {this.state.visibility &&
            (Breakfast.map((option, index) => (
              <button
                className="button"
                key={option.id}
                name={option.item}
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
