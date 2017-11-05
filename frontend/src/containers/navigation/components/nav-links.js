/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../../modules/actions/auth';

type Props = {
  fetching: boolean,
  loggedIn: boolean,
  profile: {
    id: string,
    studentId: string,
    username: string,
    fullname?: string,
    phone?: string,
    email?: string
  },
  navigation: Array<{id: string, path: string, title: string}>,
  logout: Function,
  location: Object
};

class NavLinks extends React.Component<Props, {}> {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const props = this.props;
    return (
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        { !props.fetching ?
          <ul className="navbar-nav">
            { props.navigation.length ?
                props.navigation.map(item => {
                  return (
                    <li
                      key={ item.id }
                      className={ props.location.pathname === item.path ? 'nav-item active' : 'nav-item'}>
                      <Link to={ item.path } className="nav-link">{ item.title }</Link>
                    </li>
                  );
                }) : '' }
            { props.loggedIn ? 
                <li key="logout" className="nav-item">
                  <a href="/logout" className="nav-link" onClick={ this.handleLogout }>Logout ({ props.profile.username })</a>
                </li> : '' }
          </ul>
          : <span className="navbar-text">Загружаем элементы навигации...</span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.auth.navigation,
  fetching: state.auth.fetching,
  loggedIn: state.auth.loggedIn,
  profile: state.auth.profile
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
