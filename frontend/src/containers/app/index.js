/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getState } from '../../modules/actions/auth';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Navigation from '../navigation/index';
import Home from '../home/index';
import Login from '../login/index';
import { Profile } from '../profile/index';
import { Footer } from '../footer/index';

type Props = {
  fetching: boolean,
  loggedIn: boolean,
  profile: { userId: number, username: string },
  location: Object,
  history: Object,
  match: Object,
  getState: Function
};

class App extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.getState();
  }

  render() {
    return (
      <div className="main-area">
        { !this.props.loggedIn && this.props.location.pathname !== '/login' ? <Redirect to='/login' /> : '' }
        { !this.props.fetching ?
        <div> 
          <Navigation location={ this.props.location } />
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
