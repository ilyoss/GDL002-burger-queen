import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import './styles/styles.scss';

class ServeItUp extends React.Component {
  state = {
    order: []
  };

  handleAddOrderItem = (item) => {
    this.setState((prevState) => ({ order: prevState.order.concat([item]) }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      order: prevState.order.filter((option) => optionToRemove !== option)
    }));
  }

  // Lifecycle methods
  componentDidMount(){
    try {
      const json = localStorage.getItem('order');
      const order = JSON.parse(json);

      if(order) {
        this.setState(() => ({ order }));
      }
    } catch (e) {
      // Do nothing at all if JSON data is invalid
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.order.length !== this.state.order.length) {
      const json = JSON.stringify(this.state.order);
      localStorage.setItem('order', json);
    }
  }
  componentWillUnmount(){
    console.log('componentWillunmount');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content
          order={this.state.order}
          handleAddOrderItem={this.handleAddOrderItem}
          handleDeleteOption={this.handleDeleteOption}
        />
      </div>
    );
  }
}
export default ServeItUp;
