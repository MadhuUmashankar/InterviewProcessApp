import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App url='http://localhost:3000/candinateInfo'
       pollInterval={2000}/>,
  document.getElementById('root')
);