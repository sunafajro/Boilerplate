export const GET_HOME_REQUESTED = 'GET_HOME_REQUESTED';
export const GET_HOME = 'GET_HOME';

const initialState = {
  news: [],
  fetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_HOME_REQUESTED:
        return {
          ...state,
          fetching: true
        }
  
      case GET_HOME:
        return {
          ...state,
          news: action.news,
          fetching: !state.fetching
        }

      default:
        return state
    }
  }