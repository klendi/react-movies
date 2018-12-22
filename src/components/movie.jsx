import React, { Component } from "react";
import { getGenresByID } from "../services/moviesService";
import { Link } from "react-router-dom";

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  renderGridMovie = movie => (
    <li
      className="col-xs-12 col-sm-6 col-md-4 mx-auto col-xl-3 movie"
      key={movie.id}
    >
      <Link to={`/movie?id=${movie.id}`}>
        <img
          className="responsive-img movie-poster"
          alt="Poster"
          src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
        />
      </Link>
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-genre">
        {getGenresByID(movie.genre_ids).map(g => (
          <span key={g.id}> {g.name} </span>
        ))}
      </p>
    </li>
  );

  renderListMovie = movie => (
    <li
      className="col-xs-12 col-sm-12 col-md-12 mx-auto col-xl-12 row movie"
      key={movie.id}
    >
      <img
        className="responsive-img movie-poster"
        src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
        onClick={() => this.handleImageClick(movie)}
      />
      <div className="text-container-list">
        <h1 className="movie-title-list">{movie.title}</h1>
        <br />
        <p className="movie-genre movie-genre-list">
          {getGenresByID(movie.genre_ids).map(g => (
            <span key={g.id}> {g.name} </span>
          ))}
        </p>
      </div>
    </li>
  );

  render() {
    const { movie, type } = this.props;
    switch (type) {
      case "grid":
        return this.renderGridMovie(movie);
      case "list":
        return this.renderListMovie(movie);

      default:
        return this.renderGridMovie(movie);
    }
  }
}

export default Movie;
