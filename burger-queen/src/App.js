import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Waiter from './routerComponents/Waiter';
import Kitchen from './routerComponents/Kitchen';
import './styles/styles.scss';

function App() {
  return(
    <HashRouter className="router">
      <div className="navigation">
        {/* <Navigation /> */}
        <Switch>
          <Route path='/' component={Waiter} exact/>
          <Route path='/kitchen' component={Kitchen} exact/>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
