import React, { Component } from 'react';
import { array, bool, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../modules/actions/auth';
import { NavLinks } from './components/nav-links';

class Navigation extends Component {
  static propTypes = {
    fetching: bool.isRequired,
    labels: object.isRequired,
    language: string.isRequired,
    location: object.isRequired,
    loggedIn: bool.isRequired,
    navigation: array.isRequired,
    profile: object.isRequired
  }

  clickLogoutHandle = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { fetching, labels, language, location, loggedIn, navigation, profile } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">{ labels.navBarTitle[language] }</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLinks
            fetching={ fetching }
            language={ language }
            location={ location }
            loggedIn={ loggedIn }
            logout={ this.clickLogoutHandle }
            navigation={ navigation }
            profile={ profile }
          />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.app.fetching,
  labels: state.app.labels,
  language: state.app.language,
  loggedIn: state.app.loggedIn,
  navigation: state.app.navigation,
  profile: state.app.profile
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

