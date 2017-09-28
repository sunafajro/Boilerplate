export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN = 'LOGIN';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT = 'LOGOUT';

const initialState = {
  loggedIn: false,
  fetching: false,
  username: 'guest',
  message: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case LOGIN:
      return {
        ...state,
        loggedIn: action.loggedIn,
        fetching: !state.fetching,
        username: action.username,
        message: action.message
      }

    case LOGOUT_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case LOGOUT:
      return {
        ...state,
        loggedIn: action.loggedIn,
        fetching: !state.fetching,
        message: {}
      }

    default:
      return state
  }
}