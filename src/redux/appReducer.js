import { combineReducers } from 'redux';

import navbarReducer from './navbar/navbar_reducers';

const appReducers = combineReducers({
  navbarOpen: navbarReducer,
});

export default appReducers;
