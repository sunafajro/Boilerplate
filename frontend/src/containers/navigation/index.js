import React, { Component } from 'react';
import { bool, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Menu, Icon } from 'antd';
import { logout } from '../../modules/actions/auth';

class Navigation extends Component {
  state = {
    current: this.props.loggedIn ? 'profile' : 'login' 
  }

  static propTypes = {
    fetching: bool.isRequired,
    labels: object.isRequired,
    language: string.isRequired,
    location: object.isRequired,
    loggedIn: bool.isRequired,
    navigation: object.isRequired,
    profile: object.isRequired
  }

  handleClick = (e) => {
    if (e.key === 'logout') {
      this.props.logout();
      this.setState({
        current: 'login',
      });
    } else {
      this.props.goTo(this.props.navigation[e.key].path);
      this.setState({
        current: e.key,
      });
    }
  }

  render() {
    const { fetching, labels, language, location, loggedIn, navigation, profile } = this.props;
    let menuItems = [];
    if (Object.keys(navigation).length) {
      Object.keys(navigation).forEach(item => {
        menuItems.push(
          <Menu.Item key={item} style={{ float: item !== 'home' ? 'right' : 'left' }}>
            <Icon type={navigation[item].icon} /> { navigation[item].title[language] }
          </Menu.Item>
        );
      });
    }
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ lineHeight: '64px', padding: '0 50px' }}
      >
        {menuItems}
      </Menu>
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
  logout,
  goTo: route => push(route)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

