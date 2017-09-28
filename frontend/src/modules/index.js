import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './reducers/navigation';
import home from './reducers/home';
import auth from './reducers/auth';

export default combineReducers({
  routing: routerReducer,
  navigation,
  home,
  auth
})