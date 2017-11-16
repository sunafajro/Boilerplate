/* @flow */

const DEFAULT_LABELS: Object = {
  homeBreadcrumbs: "Главная",
  loginBreadcrumbs: "Вход",
  loginPageTitle: "Форма входа",
  formEmptyFieldsAlert: "Поля формы должны быть заполнены!",
  usernameLabel: "Логин",
  passwordLabel: "Пароль",
  submitBtnLabel: "Войти"
};

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAILED,
  UPDATE_STATE,
  UPDATE_STATE_USERNAME,
  UPDATE_STATE_PASSWORD,
  UPDATE_STATE_VALID
} from '../actions/auth';

import type { Action, State } from '../types/auth'; 

const initialState: State = {
  loggedIn: false,
  fetching: false,
  profile: {},
  contacts: [],
  navigation: [],
  message: {},
  labels: { ...DEFAULT_LABELS },
  loginForm: {
    username: "",
    password: "",
    valid: ""
  }
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        fetching: true
      };

    case LOGIN_SUCCESS:
      let loginForm = { ...state.loginForm };
      loginForm.password = '';
      return {
        ...state,
        fetching: false,
        loggedIn: action.loggedIn,
        profile: action.profile,
        contacts: action.contacts,
        navigation: action.navigation,
        message: action.message,
        loginForm
      };

    case LOGIN_FAILED:
      return {
        ...state,
        fetching: false,
        message: action.message
      };

    case LOGOUT:
      return {
        ...state,
        fetching: true
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        fetching: false,
        loggedIn: false,
        profile: {},
        contacts: action.contacts,
        navigation: action.navigation,
        message: {}
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        fetching: false,
        message: {}
      };

    case GET_STATE:
      return {
        ...state,
        fetching: true
      };

    case GET_STATE_SUCCESS:
      return {
        ...state,
        fetching: false,
        loggedIn: action.loggedIn,
        profile: action.profile,
        contacts: action.contacts,
        navigation: action.navigation,
        message: {},
        labels: action.labels
      };

    case GET_STATE_FAILED:
      return {
        ...state,
        fetching: false,
        message: {}
      };

    case UPDATE_STATE:
      return {
        ...state
      };

    case UPDATE_STATE_USERNAME:
      {
        let loginForm = { ...state.loginForm };
        loginForm.username = action.username;
        return {
          ...state,
          loginForm
        };
      }

    case UPDATE_STATE_PASSWORD:
      {
        let loginForm = { ...state.loginForm };
        loginForm.password = action.password;
        return {
          ...state,
          loginForm
        };
      }

    case UPDATE_STATE_VALID:
      {
        let loginForm = { ...state.loginForm };
        loginForm.valid = action.valid;
        return {
          ...state,
          loginForm
        };
      }

    default:
      return state;
  }
};
