import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// GLOBAL FONTS
import './assets/fonts/AirbnbCereal-Black.ttf'
import './assets/fonts/AirbnbCereal-Bold.ttf'
import './assets/fonts/AirbnbCereal-Book.ttf'
import './assets/fonts/AirbnbCereal-ExtraBold.ttf'
import './assets/fonts/AirbnbCereal-Light.ttf'
import './assets/fonts/AirbnbCereal-Medium.ttf'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
