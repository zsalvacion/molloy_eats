import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import SampleMenu1 from './SampleMenu1.js';
import SampleMenu2 from './SampleMenu2.js';
import '../styles/App.css';

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
          <Route exact path="/menu1" component={SampleMenu1} />
          <Route exact path="/menu2" component={SampleMenu2} />
        </Switch>
      </div>
    </div>
    )
  }
}

export default App;
