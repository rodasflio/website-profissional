import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithRouter from './App.jsx';
import './styles/theme/UIUX.css';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);