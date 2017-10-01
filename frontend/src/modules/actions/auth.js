export const STATE_REQUESTED = 'STATE_REQUESTED';
export const STATE = 'STATE';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN = 'LOGIN';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT = 'LOGOUT';

export const login = ({ username, password }) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUESTED
    });

    const body = JSON.stringify({'LoginForm': { username, password }});

    fetch('/api/login',
    {
      method: 'POST',
      accept: 'application/json',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      let r = response.json();
      throw new Error(r.message ? r.message : 'Внутренняя ошибка сервера!');
    })
    .then(json => {
      if (json.result) {
        dispatch({
          type: LOGIN,
          userId: json.user_id,
          username: json.username,
          loggedIn: true,
          message: { type: 'success', text: json.message }
        });
      } else {
        dispatch({
          type: LOGIN,
          userId: 0,
          username: 'guest',
          loggedIn: false,
          message: { type: 'fail', text: json.message }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: LOGIN,
        userId: 0,
        username: 'guest',
        loggedIn: false,
        message: { type: 'fail', text: err }
      });
    });
  }
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUESTED
    });

    fetch('/api/logout',
    {
      method: 'POST',
      accept: 'application/json',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      let r = response.json();
      throw new Error(r.message ? r.message : 'Внутренняя ошибка сервера!');
    })
    .then(json => {
      if (json.result) {
        dispatch({
          type: LOGOUT,
          userId: 0,
          username: 'guest',
          loggedIn: false,
          message: { type: 'success', text: json.message }
        });
      } else {
        dispatch({
          type: LOGOUT,
          userId: null,
          username: null,
          loggedIn: null,
          message: { type: 'fail', text: json.message }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: LOGOUT,
        userId: null,
        username: null,
        loggedIn: null,
        message: { type: 'fail', text: err }
      });
    });
  }
};

export const getState = () => {
  return dispatch => {
    dispatch({
      type: STATE_REQUESTED
    });

    fetch('/api/state',
    {
      method: 'POST',
      accept: 'application/json',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      let r = response.json();
      throw new Error(r.message ? r.message : 'Внутренняя ошибка сервера!');
    })
    .then(json => {
      if (json.result) {
        dispatch({
          type: STATE,
          userId: json.profile.hasOwnProperty('id') ? parseInt(json.profile.id) : null,
          username: json.profile.hasOwnProperty('username') ? json.profile.username : null,
          loggedIn: json.loggedIn
        });
      } else {
        dispatch({
          type: STATE,
          userId: null,
          username: null,
          loggedIn: null
        });
      }
    })
    .catch(err => {
      dispatch({
        type: STATE,
        userId: null,
        username: null,
        loggedIn: null
      });
    });
  }
};