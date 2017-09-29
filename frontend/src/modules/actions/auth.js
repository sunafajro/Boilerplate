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
          username: json.username,
          loggedIn: true,
          message: { type: 'success', text: json.message }
        });
      } else {
        dispatch({
          type: LOGIN,
          username: 'guest',
          loggedIn: false,
          message: { type: 'fail', text: json.message }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: LOGIN,
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
          username: 'guest',
          loggedIn: false,
          message: { type: 'success', text: json.message }
        });
      } else {
        dispatch({
          type: LOGOUT,
          username: json.username,
          loggedIn: true,
          message: { type: 'fail', text: json.message }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: LOGOUT,
        username: json.username,
        loggedIn: true,
        message: { type: 'fail', text: err }
      });
    });
  }
};
