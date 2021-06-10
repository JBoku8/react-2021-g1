import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { validationMiddleware, autoLoginMiddleware } from './middleware';
import rootReducer from './reducers';

const middleware = [validationMiddleware, autoLoginMiddleware, thunk, logger];

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
