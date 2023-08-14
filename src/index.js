import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';

import {
    RouterProvider,
  } from "react-router-dom";
  

//Css
import './css/header.css';
import './css/mobileMenu.css';
import './css/hero.css'
import './css/topDeals.css'
import './css/footer.css'
import './css/products.css'
import './css/profile.css'
import '@fontsource/inter';
import './css/homePage.css'

//js


const root = document.getElementById('root');

ReactDOM.render(
    <RouterProvider router={App} />
   ,
    root
)