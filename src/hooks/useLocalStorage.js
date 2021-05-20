import { useState } from 'react';

const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setLocalStorageState = (newState) => {
    try {
      const newValue = typeof newState === 'function' ? newState(state) : newState;
      setState(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('unable to store value');
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;
