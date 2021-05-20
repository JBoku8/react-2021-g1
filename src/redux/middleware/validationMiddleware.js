export const validationMiddleware = (store) => (next) => (action) => {
  if (action.type !== 'BLOCKED_ACTION') {
    next(action);
  } else {
    console.group('[validationMiddleware]');
    console.error(`ACTION@${action.type} is not valid.`);
    console.groupEnd();
  }
};
