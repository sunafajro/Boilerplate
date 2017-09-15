import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Switch>
          <Route path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
          <Route path='/login' component={ Login }/>
        </Switch>
      </div>
    );
  }
}

export default App;
