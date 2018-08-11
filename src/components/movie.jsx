import React from 'react'
import { getGenresByID } from '../services/moviesService'

const Movie = props => {
  const { movie } = props
  return (
    <li
      className="col-xs-12 col-sm-6 col-md-4 mx-auto col-xl-3 movie"
      key={movie.id}
    >
      <img
        className="responsive-img movie-poster"
        src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path}
        onClick={() => this.handleImageClick(movie)}
      />
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-genre">
        {getGenresByID(movie.genre_ids).map(g => (
          <span key={g.id}> {g.name} </span>
        ))}
      </p>
    </li>
  )
}

export default Movie
