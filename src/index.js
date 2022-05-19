import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

import ReactDOM from 'react-dom/client';
import MainPage from './components/mainPage';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);
