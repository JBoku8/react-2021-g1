import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/error-boundary';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// console.log('REACT_APP_AUTH_URL', process.env.REACT_APP_AUTH_URL);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);
