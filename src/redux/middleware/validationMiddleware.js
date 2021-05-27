import { BLOCKED_ACTION } from '../action-types';

export const validationMiddleware = (store) => (next) => (action) => {
  if (action.type !== BLOCKED_ACTION) {
    next(action);
  } else {
    console.group('[validationMiddleware]');
    console.error(`ACTION@${action.type} is not valid.`);
    console.log('STATE', store.getState());
    console.groupEnd();
  }
};

export default validationMiddleware;
