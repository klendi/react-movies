import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.css'
import 'font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
