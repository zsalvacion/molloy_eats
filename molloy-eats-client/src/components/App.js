import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import ArMenu from './armenu.js';
import Bareburger from './bareburger.js';
import OrderHistory from './OrderHistory.js';
import OrderComplete from './OrderComplete.js';
import '../css/App.css';

class App extends Component {
  render() {
    return (
    <div className="center w85">
      <div className="ph3 pv1 background-gray">
      <img id="molloy-logo" src={require("../images/logo.jpg")} alt="Molloy Eats Logo"/>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/armenu" component={ArMenu} />
          <Route exact path="/bareburger" component={Bareburger} />
          <Route exact path="/orders" component={OrderHistory} />
          <Route exact path="/ordercomplete" component={OrderComplete} />
        </Switch>
      </div>
    </div>
    )
  }
}

export default App;
