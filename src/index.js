import React from 'react';
import ReactDOM from 'react-dom';
// import bootstrap
import './style/bootstrap5/css/bootstrap.min.css';
import Appxr from './Appx';
import Consolex from './components/mainComponent';



console.warn = () => {};
ReactDOM.render(
  <React.StrictMode>
    <Appxr/>
  </React.StrictMode>,
  document.getElementById('root')
);
Consolex();


