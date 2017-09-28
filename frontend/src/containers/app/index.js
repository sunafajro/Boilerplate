import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from '../navigation/index';
import Home from '../home/index';
import { About } from '../about/index';
import Login from '../login/index';
import { Footer } from '../footer/index';

class App extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="main-area">
        <Navigation location={ this.props.location } />
        <div className="container">
          <Switch>          
            <Route exact path='/about' component={ About }/>
            <Route exact path='/login' component={ Login }/>
            <Route path='/' component={ Home }/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
