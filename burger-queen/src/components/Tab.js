import React from 'react';

const Tab = (props) => (
  <div className="tab">
    <button className="button button--tab" autoFocus={true} onClick={props.handleToggleVisibility}>Breakfast</button>
    <button className="button button--tab" onClick={props.handleToggleVisibility}>Lunch</button>
  </div>
);

export default Tab;
