export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_STATE = 'GET_STATE';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_FAILED = 'GET_STATE_FAILED';

export const login = ({ username, password }) => {
  return dispatch => {
    dispatch({
      type: LOGIN
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
    .then(result => dispatch(loginSuccess(result)))
    .catch(err   => dispatch(loginFailed(err)));
  }
};

export const loginSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      loggedIn: result.loggedIn,
      profile: result.profile,
      message: { type: 'success', text: result.message }
    });
  }
}

export const loginFailed = (error) => {
  return dispatch => {
    dispatch({
      type: LOGIN_FAILED,
      message: { type: 'fail', text: error }
    });
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
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
    .then(result => dispatch(logoutSuccess(result)))
    .catch(err   => dispatch(logoutFailed(err)));
  }
};

export const logoutSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESS,
      message: { type: 'success', text: result.message }
    });
  }
}

export const logoutFailed = (error) => {
  return dispatch => {
    dispatch({
      type: LOGOUT_FAILED,
      message: { type: 'fail', text: error }
    });
  }
}

export const getState = () => {
  return dispatch => {
    dispatch({
      type: GET_STATE
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
    .then(result => dispatch(getStateSuccess(result)))
    .catch(err => dispatch(getStateFailed(err)));
  }
};

export const getStateSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: GET_STATE_SUCCESS,
      loggedIn: result.loggedIn,
      profile: result.profile,
      navigation: result.navigation,
      message: { type: 'success', text: result.message }
    });
  }
}

export const getStateFailed = (error) => {
  return dispatch => {
    dispatch({
      type: GET_STATE_FAILED,
      message: { type: 'fail', text: error }
    });
  }
}