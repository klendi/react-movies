import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img
            width="35"
            height="35"
            src={require('../img/popcorn.svg')}
            className="d-inline-block align-top logo"
            alt=""
          />
          React-Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    )
  }
}

export default NavBar
