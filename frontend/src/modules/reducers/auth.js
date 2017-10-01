export const STATE_REQUESTED = 'STATE_REQUESTED';
export const STATE = 'STATE';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN = 'LOGIN';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT = 'LOGOUT';

const initialState = {
  loggedIn: false,
  fetching: false,
  userId: 0,
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
        fetching: false,
        loggedIn: action.loggedIn,
        userId: action.userId,
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
        fetching: false,
        loggedIn: action.loggedIn !== null ? action.loggedIn : state.loggedIn,
        userId: action.userId !== null ? action.userId : state.userId,
        username: action.username !== null ? action.username : state.username,
        message: {}
      }

    case STATE_REQUESTED:
      return {
        ...state,
        fetching: true
      }

    case STATE:
      return {
        ...state,
        fetching: false,
        loggedIn: action.loggedIn !== null ? action.loggedIn : state.loggedIn,
        userId: action.userId !== null ? action.userId : state.userId,
        username: action.username !== null ? action.username : state.username
      }

    default:
      return state
  }
}