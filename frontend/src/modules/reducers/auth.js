export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_STATE = 'GET_STATE';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_FAILED = 'GET_STATE_FAILED';

const initialState = {
  loggedIn:   false,
  fetching:   false,
  profile:    {},
  contacts:   [],
  navigation: [],
  message:    {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        fetching: true
      }
  
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        loggedIn: action.loggedIn,
        profile:  action.profile,
        contacts: action.contacts,
        message:  action.message
      }

    case LOGIN_FAILED:
      return {
        ...state,
        fetching: false,
        message:  action.message
      }

    case LOGOUT:
      return {
        ...state,
        fetching: true
      }
  
    case LOGOUT_SUCCESS:
      return {
        ...state,
        fetching: false,
        loggedIn: false,
        profile:  {},
        message:  {}
      }

    case LOGOUT_FAILED:
      return {
        ...state,
        fetching: false,
        message:  {}
      }

    case GET_STATE:
      return {
        ...state,
        fetching: true
      }

    case GET_STATE_SUCCESS:
      return {
        ...state,
        fetching:   false,
        loggedIn:   action.loggedIn,
        profile:    action.profile,
        contacts:    action.contacts,
        navigation: action.navigation,
        message:    {}
      }

    case GET_STATE_FAILED:
      return {
        ...state,
        fetching: false,
        message: {}
      }

    default:
      return state
  }
}