import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loggerMiddleware, validationMiddleware, autoLoginMiddleware } from './middleware';
import rootReducer from './reducers';

const middleware = [loggerMiddleware, validationMiddleware, autoLoginMiddleware, thunk];

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
