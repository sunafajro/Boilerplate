import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAILED
} from '../actions/auth';
import { LABELS } from '../translations';

const initialState = {
  contacts: [],
  fetching: false,
  labels: { ...LABELS },
  language: 'ru',
  loggedIn: false,
  message: {},
  navigation: [],
  profile: {}
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
        contacts: action.contacts,
        fetching: false,
        language: action.language,
        loggedIn: action.loggedIn,
        message: {},
        navigation: action.navigation,
        profile: action.profile
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
        contacts: action.contacts,
        fetching: false,
        loggedIn: false,
        message: {},
        navigation: action.navigation,
        profile: {}
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        fetching: false,
        message: action.message
      };

    case GET_STATE:
      return {
        ...state,
        fetching: true
      };

    case GET_STATE_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
        fetching: false,
        labels: action.labels ? action.labels : { ...LABELS },
        language: action.language ? action.language : 'ru',
        loggedIn: action.loggedIn,
        navigation: action.navigation,
        profile: action.profile
      };

    case GET_STATE_FAILED:
      return {
        ...state,
        fetching: false,
        message: action.message
      };

    default:
      return state;
  }
};
