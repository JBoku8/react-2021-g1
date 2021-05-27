export const loggerMiddleware = (store) => (next) => (action) => {
  console.group('[LoggerMiddleware]@Action', action.type);
  console.log('[OLD STATE]', store.getState());
  next(action);
  console.log('[NEW STATE]', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
