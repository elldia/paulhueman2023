import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Reset.css';
import './styles/App.css';
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Cart /> */}
  </React.StrictMode>
);

