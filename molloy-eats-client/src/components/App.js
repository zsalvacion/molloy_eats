import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import ArMenu from './ArMenu.js';
import bareburger from './bareburger.js';
import Orders from './Orders.js';
import '../css/App.css';

class App extends Component {
  render() {
    return (
    <div className="center w85">
      <div className="ph3 pv1 background-gray">
      <h1>Molloy Eats</h1>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/ArMenu" component={ArMenu} />
          <Route exact path="/bareburger" component={bareburger} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </div>
    </div>
    )
  }
}

export default App;
