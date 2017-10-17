import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getState } from '../../modules/actions/auth';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Navigation from '../navigation/index';
import Home from '../home/index';
import { About } from '../about/index';
import Login from '../login/index';
import { Footer } from '../footer/index';

export interface Props {
  location: Object;
  loggedIn: boolean;
  userId: number;
  username: string;
  fetching: boolean;
  getState: Function
}

class App extends React.Component<Props, {}> {

  componentDidMount() {
    this.props.getState();
  }

  render() {
    let props = this.props;
    return (
      <div className="main-area">
        { props.loggedIn && props.location.pathname !== '/login' ? <Redirect to='/login' /> : '' }
        <Navigation location={ props.location } />
        <div className="container"> 
            <Switch>
              <Route exact path='/about' component={ About }/>
              <Route exact path='/login' component={ Login }/>
              <Route path='/' component={ Home }/>
            </Switch>
        </div>
        <Footer footerText="Язык Для Успеха 2017" />
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
