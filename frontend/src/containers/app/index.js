import React, {Component} from 'react';
import { bool, func, object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAppState } from '../../modules/actions/app';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Navigation from '../navigation/index';
import Home from '../home/index';
import Login from '../login/index';
import Profile from '../profile/index';
import { Footer } from '../footer/index';

class App extends Component {
  static propTypes = {
    appLoaded: bool.isRequired,
    fetching: bool.isRequired,
    location: object.isRequired,
    loggedIn: bool.isRequired,
    profile: object.isRequired,
    getAppState: func.isRequired
  }

  componentDidMount() {
    this.props.getAppState();
  }

  render() {
    const { appLoaded, fetching, location, loggedIn } = this.props;
    let redirect = null;
    let content = null;
    if (appLoaded) {
      if (!loggedIn && location.pathname !== '/login') {
        redirect = <Redirect to='/login' />;
      }
      if (!fetching) {
        content = (
          <Layout> 
            <Navigation location={ location } />
            <Layout> 
              <Switch>
                <Route exact path='/profile' component={ Profile }/>
                <Route exact path='/login' component={ Login }/>
                <Route path='/' component={ Home }/>
              </Switch>
            </Layout>
            <Footer />
          </Layout>
        );
      }
    } else {
      content = <div className="alert alert-warning">Подождите. Идет загрузка приложения...</div>;
    }
    return (
      <div className="main-area">
        { redirect }
        { content }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appLoaded: state.app.appLoaded, 
  loggedIn: state.app.loggedIn,
  profile: state.app.profile,
  fetching: state.app.fetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAppState
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
