import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.css'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

const render = () => {
  ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>,
    document.getElementById('root')
  )
  console.log('rendered with state', store.getState())
}
render()

store.subscribe(render)


registerServiceWorker()
