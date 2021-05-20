export const loggerMiddleware = (store) => (next) => (action) => {
  console.group('[LoggerMiddleware]@Action', action.type);
  console.log('[OLD STATE]', store.getState());
  console.log('[ACTION]', action);
  next(action);
  console.log('[NEW STATE]', store.getState());
  console.groupEnd();
};
