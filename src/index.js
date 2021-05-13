import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/error-boundary';
import App from './App';

import rootStore from './redux/store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// console.log('REACT_APP_AUTH_URL', process.env.REACT_APP_AUTH_URL);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={rootStore}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);
