// import 'bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx'


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <ScrollToTop>
      <App />
    </ScrollToTop>  
  </BrowserRouter>,
  rootElement
)


