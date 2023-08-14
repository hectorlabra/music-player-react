import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'; 
import Player from './component/Player'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Player />
  </React.StrictMode>,
  document.getElementById('root')
);
