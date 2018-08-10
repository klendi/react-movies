import React, { Component } from 'react'
// import Movies from './components/movies'
import NavBar from './components/navbar'
import Router from './routing/router'

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
