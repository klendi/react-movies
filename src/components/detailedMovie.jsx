import React, { Component } from 'react'
import queryString from 'querystring'
import { getDetailedMovie, getGenresByID } from '../services/moviesService'

class DetailedMovie extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    movie: {},
    canRender: false
  }

  loadMovie = () => {
    const { id } = queryString.parse(this.props.location.search)
    getDetailedMovie(id).then(m => {
      this.setState({ movie: m }, () => {
        this.setState({ canRender: true })
      })
    })
  }
  componentDidMount() {
    this.loadMovie()
  }

  render() {
    const { history } = this.props
    const { movie } = this.state
    if (this.state.canRender) {
      return (
        <div>
          <h1>Movie title is {movie.title}</h1>
          <img
            className="responsive-img full-poster-image"
            src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path}
          />
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-genre">
            {movie.genres.map(genre => (
              <span key={genre.id}> {genre.name} </span>
            ))}
          </p>
          <button
            onClick={() => history.push('/movies')}
            className="btn btn-primary"
          >
            Home
          </button>
        </div>
      )
    } else return null
  }
}

export default DetailedMovie
