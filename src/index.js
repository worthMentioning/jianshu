import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import { GlobalStyle } from './statics/iconfont/iconfont'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


