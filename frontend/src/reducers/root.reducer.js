import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { partsReducer } from './parts.reducer';

export const rootReducer = combineReducers({
  loggedIn: authReducer,
  parts: partsReducer,

});
