import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <NavLink to='/'>Waiter</NavLink>
        <NavLink to='/kitchen'>Kitchen</NavLink>
      </div>
    )
  }
}

export default Navigation;
