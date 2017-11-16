/* @flow */

export const LOGIN: string = "LOGIN";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_FAILED: string = "LOGIN_FAILED";

export const LOGOUT: string = "LOGOUT";
export const LOGOUT_SUCCESS: string = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: string = "LOGOUT_FAILED";

export const GET_STATE: string = "GET_STATE";
export const GET_STATE_SUCCESS: string = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED: string = "GET_STATE_FAILED";

export const UPDATE_STATE: string = "UPDATE_STATE";
export const UPDATE_STATE_USERNAME: string = "UPDATE_STATE_USERNAME";
export const UPDATE_STATE_PASSWORD: string = "UPDATE_STATE_PASSWORD";
export const UPDATE_STATE_VALID: string = "UPDATE_STATE_VALID";

import md5 from "js-md5";
import type { ThunkAction } from '../types/auth'; 

export const login = (username: string, password: string): ThunkAction => {
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

export const loginSuccess = (result: Object): ThunkAction => {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      loggedIn: result.loggedIn,
      profile: result.profile,
      contacts: result.contacts,
      navigation: result.navigation,
      message: { type: "success", text: result.message }
    });
  };
};

export const loginFailed = (error: string): ThunkAction => {
  return dispatch => {
    dispatch({
      type: LOGIN_FAILED,
      message: { type: "fail", text: error }
    });
  };
};

export const logout = (): ThunkAction => {
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

export const logoutSuccess = (result: Object): ThunkAction => {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESS,
      contacts: result.contacts,
      navigation: result.navigation,
      message: { type: "success", text: result.message }
    });
  };
};

export const logoutFailed = (error: string): ThunkAction => {
  return dispatch => {
    dispatch({
      type: LOGOUT_FAILED,
      message: { type: "fail", text: error }
    });
  };
};

export const getState = (): ThunkAction => {
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

export const getStateSuccess = (result: Object): ThunkAction => {
  return dispatch => {
    dispatch({
      type: GET_STATE_SUCCESS,
      loggedIn: result.loggedIn,
      profile: result.profile,
      contacts: result.contacts,
      navigation: result.navigation,
      message: { type: "success", text: result.message },
      labels: result.labels
    });
  };
};

export const getStateFailed = (error: string): ThunkAction => {
  return dispatch => {
    dispatch({
      type: GET_STATE_FAILED,
      message: { type: "fail", text: error }
    });
  };
};

export const updateState = (value: string | boolean, key: string): ThunkAction => {
  return dispatch => {
    dispatch({
      type: UPDATE_STATE
    });
    switch (key) {
      case "username":
        {
          dispatch(updateStateUsername(value));
        }
        break;
      case "password":
        {
          dispatch(updateStatePassword(value));
        }
        break;
      case "valid":
        {
          dispatch(updateStateValid(value));
        }
        break;
    }
  };
};

export const updateStateUsername = (username: string): ThunkAction => {
  return dispatch => {
    dispatch({
      type: UPDATE_STATE_USERNAME,
      username
    });
  };
};

export const updateStatePassword = (password: string): ThunkAction => {
  return dispatch => {
    dispatch({
      type: UPDATE_STATE_PASSWORD,
      password
    });
  };
};

export const updateStateValid = (valid: boolean): ThunkAction => {
  return dispatch => {
    dispatch({
      type: UPDATE_STATE_VALID,
      valid
    });
  };
};
