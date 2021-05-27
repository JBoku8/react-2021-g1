import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loggerMiddleware, validationMiddleware, autoLoginMiddleware } from './middleware';
import { appReducer } from './reducers';

const middleware = [loggerMiddleware, validationMiddleware, autoLoginMiddleware, thunk];

const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
