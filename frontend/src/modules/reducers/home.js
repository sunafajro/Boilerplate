export const GET_HOME = 'GET_HOME';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILED = 'GET_HOME_FAILED';

const initialState = {
  jumbotron: {},
  news: [],
  fetching: false,
  message: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      return {
        ...state,
        fetching: true
      }
  
    case GET_HOME_SUCCESS:
      return {
        ...state,
        jumbotron: action.jumbotron,
        news: action.news,
        fetching: false,
        message: action.message
      }

    case GET_HOME_FAILED:
      return {
        ...state,
        fetching: false,
        message: action.message
      }

    default:
      return state
  }
}