/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './components/nav-links';

type Props = {
  location: Object
}

class Navigation extends React.Component<Props, {}> {
  render() {
    const props = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Личный кабинет клиента</Link>
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
          <NavLinks location={ props.location } />
        </div>
      </nav>
    );
  }
}

export default Navigation;

