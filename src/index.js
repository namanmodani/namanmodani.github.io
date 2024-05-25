import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import AppRoutes from './routes';

<link rel="icon" type="image/png" href="%PUBLIC_URL%/images/favicon.png" />

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);