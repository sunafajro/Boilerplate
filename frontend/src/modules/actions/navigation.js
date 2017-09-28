export const GET_NAVIGATION_REQUESTED = 'GET_NAVIGATION_REQUESTED';
export const GET_NAVIGATION = 'GET_NAVIGATION';

export const getNavigationLinks = () => {
  return dispatch => {
    dispatch({
      type: GET_NAVIGATION_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: GET_NAVIGATION,
        links: LINKS
      })
    }, 2000);
  }
};

const LINKS = [
  { id: 'home', title: 'Home', value: '/'},
  { id: 'about', title: 'About', value: '/about'}
];