import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED
} from '../actions/auth';

const initialState = {
  fetching: false,
  loggedIn: false,
  message: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        fetching: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        loggedIn: action.loggedIn,
        message: {}
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
        message: {}
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        fetching: false,
        message: action.message
      };

    default:
      return state;
  }
};
