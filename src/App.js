import React, { Component } from 'react'
import NavBar from './components/navbar'
import Router from './routing/router'
require('dotenv').config()

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Router />
        </main>
      </div>
    )
  }
}
