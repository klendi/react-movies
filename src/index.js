import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.css'
import 'font-awesome/css/font-awesome.css'
import { BrowserRouter as Router } from 'react-router-dom'
import history from 'history'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
