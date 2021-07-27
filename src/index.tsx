import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'reset-css';
import './index.css';
import LoadingProvider from './providers/loading';

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <Router>
        <App />
      </Router>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
