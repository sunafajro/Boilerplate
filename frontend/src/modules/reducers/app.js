import {
    GET_APP_STATE,
    GET_APP_STATE_SUCCESS,
    GET_APP_STATE_FAILED,
    UPDATE_APP_STATE,
    CHANGE_APP_LANGUAGE
  } from "../actions/app";
  
  import { LABELS } from '../translations';

  const initialState = {
    appLoaded: false,
    contacts: [],
    fetching: false,
    labels: { ...LABELS },
    language: 'ru',
    loggedIn: false,
    message: {},
    navigation: {},
    profile: {}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_APP_STATE:
        return {
          ...state,
          fetching: true
        };
  
      case GET_APP_STATE_SUCCESS:
        return {
          ...state,
          fetching: false,
          appLoaded: true,
          contacts: action.contacts,
          loggedIn: action.loggedIn,
          language: action.language,
          message: {},
          navigation: action.navigation,
          profile: action.profile
        };
  
      case GET_APP_STATE_FAILED:
        return {
          ...state,
          fetching: false,
          loggedIn: false,
          message: action.error
        };
  
      case UPDATE_APP_STATE:
        return {
          ...state,
          contacts: action.contacts,
          language: action.language,
          loggedIn: action.loggedIn,
          navigation: action.navigation,
          profile: action.profile
        };
  
      case CHANGE_APP_LANGUAGE:
        return {
          ...state,
          language: action.language
        };
  
      default:
        return state;
    }
  };