import React from 'react';
import logo from '../images/waiter.png';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">Serve it up!</h1>
    </div>
  </div>
);

export default Header;
