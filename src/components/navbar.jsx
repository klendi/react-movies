import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = {
    activeNavBarIndex: 0
  }

  handleNavBarClick = index => {
    this.setState({ activeNavBarIndex: index })
  }

  render() {
    const { activeNavBarIndex } = this.state
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              onClick={() => this.handleNavBarClick(0)}
              className={activeNavBarIndex === 0 ? 'navitem active' : 'navitem'}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              onClick={() => this.handleNavBarClick(1)}
              className={activeNavBarIndex === 1 ? 'navitem active' : 'navitem'}
            >
              <Link className="nav-link" to="/popular">
                Popular
              </Link>
            </li>
            <li
              onClick={() => this.handleNavBarClick(2)}
              className={activeNavBarIndex === 2 ? 'navitem active' : 'navitem'}
            >
              <Link className="nav-link" to="/top-rated">
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
