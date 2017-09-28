export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN = 'LOGIN';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT = 'LOGOUT';

export const login = ({ username, password }) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUESTED
    });

    return setTimeout(() => {
      let auth = authUser({ username, password })
      dispatch({
        type: LOGIN,
        username: auth ? username : 'guest',
        loggedIn: auth,
        message: auth ?
          { type: 'success', text:'Вход успешен' } :
          { type: 'fail', text:'Неправильный логин или пароль' }
      })
    }, 2000);
  }
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: LOGOUT,
        loggedIn: false
      })
    }, 2000);
  }
};

function authUser ({ username, password }) {

  let auth = USERS.filter(item => {
    return item.username === username && item.password === password;
  });

  return auth.length ? true : false;
}

const USERS = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'user', password: 'user' }
];