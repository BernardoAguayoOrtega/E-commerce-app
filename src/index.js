//import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
//import browser router from react-router-dom that allow us to implement as a provider trough our app
import { BrowserRouter as Router } from 'react-router-dom';
//import context provider
import { ContextProvider } from './context'
//import styles
import '../src/assets/styles/index.css';
//import components
import App from './App';

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root'),
);
