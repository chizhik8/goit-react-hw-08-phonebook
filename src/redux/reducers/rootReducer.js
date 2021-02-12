import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

export default rootReducer;
