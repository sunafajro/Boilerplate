import React, {Component} from 'react';
import { bool, func, object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getState } from '../../modules/actions/auth';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Navigation from '../navigation/index';
import Home from '../home/index';
import Login from '../login/index';
import Profile from '../profile/index';
import { Footer } from '../footer/index';

class App extends Component {
  static propTypes = {
    fetching: bool.isRequired,
    location: object.isRequired,
    loggedIn: bool.isRequired,
    profile: object.isRequired,
    getState: func.isRequired
  }

  componentDidMount() {
    this.props.getState();
  }

  render() {
    const { fetching, location, loggedIn } = this.props;
    return (
      <div className="main-area">
        { !loggedIn && location.pathname !== '/login' ? <Redirect to='/login' /> : '' }
        { !fetching ?
        <div> 
          <Navigation location={ location } />
          <div className="container"> 
            <Switch>
              <Route exact path='/profile' component={ Profile }/>
              <Route exact path='/login' component={ Login }/>
              <Route path='/' component={ Home }/>
            </Switch>
          </div>
        <Footer />
        </div>
        : <div className="alert alert-warning">Подождите. Идет загрузка приложения...</div> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  profile: state.auth.profile,
  fetching: state.auth.fetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getState
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
