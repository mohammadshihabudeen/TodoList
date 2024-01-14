import React from 'react';//import packages
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//cames from react dom 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
