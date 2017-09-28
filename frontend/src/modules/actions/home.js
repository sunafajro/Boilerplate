export const GET_HOME_REQUESTED = 'GET_HOME_REQUESTED';
export const GET_HOME = 'GET_HOME';

export const getHome = () => {
  return dispatch => {
    dispatch({
      type: GET_HOME_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: GET_HOME,
        jumbotron: [ NEWS.jumbotron ],
        news: [
          NEWS.first,
          NEWS.second,
          NEWS.third,
          NEWS.fourth
        ]
      })
    }, 2000);
  }
};

const NEWS = {
  jumbotron: {
    id: 1, title: 'Jumbotron heading', body: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
  },
  first: {
    id: 1, title: 'News title', body: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'
  },
  second: {
    id: 2, title: 'News title', body: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'
  },
  third: {
    id: 3, title: 'News title', body: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'
  },
  fourth: {
    id: 4, title: 'News title', body: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'
  }
};