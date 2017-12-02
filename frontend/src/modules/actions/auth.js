import md5 from "js-md5";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const GET_STATE = "GET_STATE";
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED = "GET_STATE_FAILED";

export const login = (username, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });

    const body = {
      LoginForm: {
        username: username,
        password: md5(password)
      }
    };

    fetch("/api/login", {
      method: "POST",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Ошибка входа!");
      })
      .then(result => dispatch(loginSuccess(result)))
      .catch(error => dispatch(loginFailed(error)));
  };
};

export const loginSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      contacts: result.contacts,
      language: result.language,
      loggedIn: result.loggedIn,
      navigation: result.navigation,
      profile: result.profile
    });
  };
};

export const loginFailed = (error) => {
  return dispatch => {
    dispatch({
      type: LOGIN_FAILED,
      message: { type: "fail", text: error }
    });
  };
};

// ************************************* //

export const logoutSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESS,
      contacts: result.contacts,
      navigation: result.navigation
    });
  };
};

export const logoutFailed = (error) => {
  return dispatch => {
    dispatch({
      type: LOGOUT_FAILED,
      message: { type: "fail", text: error }
    });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
    });

    fetch("/api/logout", {
      method: "POST",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Внутренняя ошибка сервера!");
      })
      .then(result => dispatch(logoutSuccess(result)))
      .catch(error => dispatch(logoutFailed(error)));
  };
};

// ************************************* //

export const getStateSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: GET_STATE_SUCCESS,      
      contacts: result.contacts,
      labels: result.labels,
      language: result.language,
      loggedIn: result.loggedIn,
      navigation: result.navigation,
      profile: result.profile,
    });
  };
};

export const getStateFailed = (error) => {
  return dispatch => {
    dispatch({
      type: GET_STATE_FAILED,
      message: { type: "fail", text: error }
    });
  };
};

export const getState = () => {
  return dispatch => {
    dispatch({
      type: GET_STATE
    });

    fetch("/api/state", {
      method: "POST",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Внутренняя ошибка сервера!");
      })
      .then(result => dispatch(getStateSuccess(result)))
      .catch(error => dispatch(getStateFailed(error)));
  };
};