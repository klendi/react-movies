import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <NavLink className="navbar-brand" to="/">
      <img
        width="35"
        height="35"
        src={require('../img/popcorn.svg')}
        className="d-inline-block align-top logo"
        alt="Logo"
      />
      React-Movies
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink exact className="navitem nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="navitem nav-link" to="/popular">
          Popular
        </NavLink>
        <NavLink className="navitem nav-link" to="/top-rated">
          Top Rated
        </NavLink>
      </ul>
    </div>
  </nav>
)

export default NavBar
