import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { companyReducer } from './companyReducer';
import { counterReducer } from './counterReducer';

const rootReducer = combineReducers({
  user: authReducer,
  companies: companyReducer,
  counter: counterReducer,
});

export default rootReducer;
