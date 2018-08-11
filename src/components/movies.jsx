import React, { Component } from 'react'
import { searchMovie, getDetailedMovie } from '../services/moviesService'
import Movie from './movie'
import Pagination from './pagination'

class Movies extends Component {
  state = {
    movies: [],
    rawData: [],
    searchMovieName: '',
    currentPage: 1,
    submitedMovieName: ''
  }

  handleMovieTitleInput = e => {
    this.setState({ searchMovieName: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    if (this.state.searchMovieName === undefined) return

    searchMovie(this.state.searchMovieName, this.state.currentPage).then(
      result => {
        this.setState({
          movies: result.results,
          rawData: result,
          currentPage: 1,
          submitedMovieName: this.state.searchMovieName
        })
      }
    )
  }

  handleImageClick = movie => {
    console.log('got the click, movie with id of ', movie.id)
  }

  handlePageChange = page => {
    this.setState({ currentPage: page }, () => {
      searchMovie(this.state.searchMovieName, this.state.currentPage).then(
        result => {
          this.setState({
            movies: result.results,
            rawData: result
          })
        }
      )
    })
  }

  renderMoviesPosterList = movies => {
    return (
      <ul className="row">
        {movies.map(m => (
          <Movie key={m.id} movie={m} />
        ))}
      </ul>
    )
  }

  render() {
    const {
      total_pages: totalPages,
      page: currentPage,
      total_results: totalResults
    } = this.state.rawData
    return (
      <div>
        <br />
        <form className="form-inline" onSubmit={this.handleFormSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              id="movieTitle"
              autoFocus
              placeholder="Movie Title"
              value={this.state.searchMovieName}
              onChange={this.handleMovieTitleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 ml-2">
            Search
          </button>
        </form>
        <br />
        {this.state.movies === undefined || this.state.movies.length === 0 ? (
          <p>No Results</p>
        ) : (
          <div>
            <p>
              Got <span className="font-weight-bold">{totalResults}</span>{' '}
              results for '{this.state.submitedMovieName}'
            </p>
            {this.renderMoviesPosterList(this.state.movies)}
          </div>
        )}
        <Pagination
          pageCount={totalPages || 1}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    )
  }
}

export default Movies
