import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../../modules/actions/auth';

class NavLinks extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired,
    navigation: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        { !this.props.fetching ?
            <ul className="navbar-nav">
              { this.props.navigation.length ?
                this.props.navigation.map(item => {
                    return (
                      <li
                        key={ item.id }
                        className={ this.props.location.pathname === item.path ? 'nav-item active' : 'nav-item'}>
                        <Link to={ item.path } className="nav-link">{ item.title }</Link>
                      </li>
                    );
                  }) : '' }
              { this.props.loggedIn ? 
                  <li key="logout" className="nav-item">
                    <a href="/logout" className="nav-link" onClick={ this.handleLogout }>Logout ({ this.props.profile.username })</a>
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
