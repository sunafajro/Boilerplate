import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './reducers/home';
import auth from './reducers/auth';

export default combineReducers({
  routing: routerReducer,
  home,
  auth
})