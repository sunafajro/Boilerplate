export const GET_NAVIGATION_REQUESTED = 'GET_NAVIGATION_REQUESTED';
export const GET_NAVIGATION = 'GET_NAVIGATION';

const initialState = {
  links: [],
  fetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NAVIGATION_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case GET_NAVIGATION:
      return {
        ...state,
        links: action.links,
        fetching: !state.fetching
      }

    default:
      return state
  }
}