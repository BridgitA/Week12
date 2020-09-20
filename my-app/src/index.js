import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myfirstelement = (
  <div>
    <h2>Welcome to React Transportation</h2> 
    <p>The best place to buy vehicles online</p>

    <h2>Choose Options</h2>
  </div>

)



ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
