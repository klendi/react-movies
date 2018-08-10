import React, { Component } from 'react'
import { getGenresByID, getPopular } from '../services/moviesService'

class Popular extends Component {
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
    return (
      <div>
        <p>
          Showing{' '}
          <span className="font-weight-bold">{this.state.movies.length}</span>{' '}
          movies
        </p>
        {this.renderMoviesPosterList(this.state.movies)}
      </div>
    )
  }
}

export default Popular
