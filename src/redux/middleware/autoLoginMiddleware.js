import { AUTH_TOKEN } from '../../utils/constants';
import { AUTO_LOGIN } from '../action-types';
import { setAuthUserAction } from '../actions';

export const autoLoginMiddleware = (store) => (next) => (action) => {
  if (action.type === AUTO_LOGIN) {
    console.group('[autoLoginMiddleware]');
    if (localStorage.getItem(AUTH_TOKEN)) {
      const user = JSON.parse(localStorage.getItem(AUTH_TOKEN));
      store.dispatch(setAuthUserAction(user));
    }
    console.groupEnd();
  } else {
    next(action);
  }
};

export default autoLoginMiddleware;
