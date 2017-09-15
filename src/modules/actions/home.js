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
        news: [
          {id: 1, title: 'Первая новость', body: 'Текст новости'},
          {id: 2, title: 'Вторая новость', body: 'Текст новости'},
          {id: 3, title: 'Третья новость', body: 'Текст новости'}
        ]
      })
    }, 3000);
  }
};