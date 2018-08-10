import React, { Component } from 'react'
import { searchMovie, getGenresByID } from '../services/moviesService'
// import Movie from './movie'
import Pagination from './pagination'

class Movies extends Component {
  constructor() {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  state = {
    movies: [],
    rawData: [],
    searchMovieName: '',
    currentPage: 1,
    queryMessage: 'Search returned no movies'
  }

  handleMovieTitleInput = e => {
    this.setState({ searchMovieName: e.target.value })
  }

  async handleFormSubmit(e) {
    e.preventDefault()
    if (this.state.searchMovieName === undefined) return
    await searchMovie(
      this.state.searchMovieName,
      this.state.currentPage,
      (error, result) => {
        this.setState({
          movies: result.results,
          rawData: result,
          currentPage: result.page
        })
      }
    )
  }

  handleImageClick = movie => {
    console.log('got the click, movie with id of ', movie.id)
  }

  async handlePageChange(page) {
    this.setState({ currentPage: page }, () => {
      searchMovie(
        this.state.searchMovieName,
        this.state.currentPage,
        (error, result) => {
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
          <li
            className="col-xs-12 col-sm-6 col-md-4 mx-auto col-xl-3 movie"
            key={m.id}
          >
            <img
              className="responsive-img movie-poster"
              src={'http://image.tmdb.org/t/p/w500/' + m.poster_path}
              alt="Poster image"
              onClick={() => this.handleImageClick(m)}
            />
            <h1 className="movie-title">{m.title}</h1>
            <p className="movie-genre">
              {getGenresByID(m.genre_ids).map(g => (
                <span key={g.id}> {g.name} </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { total_pages: totalPages, page: currentPage } = this.state.rawData
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
          <p>Search returned no movies</p>
        ) : (
          <div>
            <p>
              Showing{' '}
              <span className="font-weight-bold">
                {this.state.movies.length}
              </span>{' '}
              movies
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
