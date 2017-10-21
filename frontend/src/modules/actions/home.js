export const GET_HOME = 'GET_HOME';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILED = 'GET_HOME_FAILED';

export const getHome = () => {
  return dispatch => {
    dispatch({
      type: GET_HOME
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
      }
      let r = response.json();
      throw new Error(r.message ? r.message : 'Внутренняя ошибка сервера!');    
    })
    .then(result => dispatch(getHomeSuccess(result)))
    .catch(err => dispatch(getHomeFailed(err)));
  }
};

export const getHomeSuccess = (result) => {
  return dispatch => {
    dispatch({
      type: GET_HOME_SUCCESS,
      jumbotron: result.jumbotron,
      news: result.news,
      message: { type: 'success', text: result.message}
    });
  }
};

export const getHomeFailed = (err) => {
  return dispatch => {
    dispatch({
      type: GET_HOME_FAILED,
      message: { type: 'fail', text: err }
    });
  }
};