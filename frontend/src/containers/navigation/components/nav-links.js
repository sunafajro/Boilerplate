import React from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';

NavLinks.propTypes = {
  fetching: bool.isRequired,
  language: string.isRequired,
  location: object.isRequired,
  loggedIn: bool.isRequired,
  logout: func.isRequired,
  navigation: array.isRequired,
  profile: object.isRequired
};

export function NavLinks ({ fetching, language, location, loggedIn, logout, navigation, profile }) {
  let links = null;
  if (!fetching) {
    let temp = []; 
    if (navigation.length) {
      temp = navigation.map(item => {
        return (
          <li
            key={ item.id }
            className={ location.pathname === item.path ? 'nav-item active' : 'nav-item'}>
            <Link to={ item.path } className="nav-link">{ item.title[language] }</Link>
          </li>
        );
      });
    }
    if (loggedIn) {
      temp.push(
        <li key="logout" className="nav-item">
          <a href="/logout" className="nav-link" onClick={ logout }>Logout ({ profile.username })</a>
        </li>
      );
    }
    links = (<ul className="navbar-nav">{ temp }</ul>);
  } else {
    links = (<span className="navbar-text">Загружаем элементы навигации...</span>);
  }

  return (
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      { links }
    </div>
  );
}