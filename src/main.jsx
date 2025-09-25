import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithRouter from './App.jsx';
import './styles/theme/UIUX.css'; // Importando o novo arquivo de tema

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);