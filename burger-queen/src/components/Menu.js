import React from 'react';
import Breakfast from './data/breakfast.json';
import Lunch from './data/lunch.json';

class Menu extends React.Component{
  constructor(props){
    super(props);
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

  render(){
    return (
      <div className="content__module">
        <div className="tab">
          <button className="button button--tab" autoFocus={true} onClick={this.handleToggleVisibility}>Breakfast</button>
          <button className="button button--tab" onClick={this.handleToggleVisibility}>Lunch</button>
        </div>

        <div className="menu__container">

          {this.state.visibility &&
            (Breakfast.map((option) => (
              <button className="button">{option.item}: ${option.price}</button>))
            )
          }

        </div>

      </div>
    );
  }
}

export default Menu;
