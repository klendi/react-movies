import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.css'
import 'font-awesome/css/font-awesome.css'
import { createBrowserHistory } from 'history'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
