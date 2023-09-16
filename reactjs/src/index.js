//start the app index is the starting point

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));//render in indedx.html reference root attacht the dom
root.render(
  <React.StrictMode>
    <App /> 
    {/* component where the app  starts one html is needed for render the single page
    attach the app component*/}
  </React.StrictMode>
);

