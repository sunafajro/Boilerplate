import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getState } from '../../modules/actions/auth';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Navigation from '../navigation/index';
import Home from '../home/index';
import { About } from '../about/index';
import Login from '../login/index';
import { Footer } from '../footer/index';

class App extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    fetching: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.getState();
  }

  render() {
    return (
      <div className="main-area">
        { !this.props.loggedIn && this.props.location.pathname !== '/login' ? <Redirect to='/login' /> : '' }
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

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  userId: state.auth.userId,
  username: state.auth.username,
  fetching: state.auth.fetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getState
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
