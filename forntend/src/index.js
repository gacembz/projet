import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./components/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from './components/redux/store';
// import "./components/Home.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter> 
  
  <Provider store={store}>
   <App />
   </Provider>
   
  </BrowserRouter>,
//  document.getElementById("root")
);
