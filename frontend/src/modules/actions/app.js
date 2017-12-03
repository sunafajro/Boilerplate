export const GET_APP_STATE = 'GET_APP_STATE';
export const GET_APP_STATE_SUCCESS = 'GET_APP_STATE_SUCCESS';
export const GET_APP_STATE_FAILED = 'GET_APP_STATE_FAILED';
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE';
export const CHANGE_APP_LANGUAGE = 'CHANGE_APP_LANGUAGE';

export const getAppState = () => {
    return dispatch => {
      dispatch({
        type: GET_APP_STATE
      });
  
      fetch("/api/state", {
        method: "POST",
        accept: "application/json",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Внутренняя ошибка сервера!");
        })
        .then(result => dispatch(getAppStateSuccess(result)))
        .catch(error => dispatch(getAppStateFailed(error)));
    };
  };

export const getAppStateSuccess = (result) => {
    return dispatch => {
      dispatch({
        type: GET_APP_STATE_SUCCESS,      
        contacts: result.contacts,
        labels: result.labels,
        language: result.language,
        loggedIn: result.loggedIn,
        navigation: result.navigation,
        profile: result.profile,
      });
    };
  };
  
  export const getAppStateFailed = (error) => {
    return dispatch => {
      dispatch({
        type: GET_APP_STATE_FAILED,
        message: { type: "fail", text: error }
      });
    };
  };

  // ********************************** //

  export const updateAppState = newState => {
    return dispatch => {
      dispatch({
        type: UPDATE_APP_STATE,
        contacts: newState.contacts,
        labels: newState.labels,
        language: newState.language,
        loggedIn: newState.loggedIn,
        navigation: newState.navigation,
        profile: newState.profile,
      });
    };
  };

  // ********************************** // 

  export const changeAppLanguage = language => {
    return dispatch => {
      dispatch({
        type: CHANGE_APP_LANGUAGE,
        language
      });
    };
  }