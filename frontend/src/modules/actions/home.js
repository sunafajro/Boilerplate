export const GET_HOME_REQUESTED = 'GET_HOME_REQUESTED';
export const GET_HOME = 'GET_HOME';

export const getHome = () => {
  return dispatch => {
    dispatch({
      type: GET_HOME_REQUESTED
    });

    fetch('/api/get-ads',
    {
      method: 'POST',
      accept: 'application/json',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        if(isJson(response)) {
          let r = response.json();
        }
        throw new Error(r.message ? r.message : 'Внутренняя ошибка сервера!');
      }      
    })
    .then(json => {
      if (json.result) {
        let jumbotron = [];
        let news = [];
        if (json.ads.length) {
          jumbotron = [ json.ads[0] ];
          news = [ ...json.ads ];
          news.shift();
        }
        dispatch({
          type: GET_HOME,
          jumbotron: jumbotron,
          news: news,
          message: { type: 'success', text: json.message}
        });
      } else {
        dispatch({
          type: GET_HOME,
          jumbotron: [],
          news: [],
          message: { type: 'fail', text: json.message ? json.message : 'Ошибка получения новостей!' }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_HOME,
        jumbotron: [],
        news: [],
        message: { type: 'fail', text: err }
      });
    });
  }
};

function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}