import React, { Component } from "react";
import { searchMovie } from "../services/moviesService";
import Movie from "./movie";
import Pagination from "./pagination";
import ListOrGrid from "./listOrGrid";
import queryString from "query-string";
import { beginTheBar, endTheBar } from "../services/loadingBarService";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movies: [],
    rawData: [],
    searchMovieName: "",
    currentPage: 1,
    submitedMovieName: "",
    layoutMode: "grid"
  };

  search = _callback => {
    let data = this.getHeaderQuery().q;
    let page = this.state.currentPage;

    searchMovie(data, page).then(result => {
      this.setState(
        {
          movies: result.results,
          rawData: result,
          currentPage: 1,
          submitedMovieName: data
        },
        () => {
          _callback();
        }
      );
    });
  };

  getHeaderQuery = () => queryString.parse(this.props.location.search);

  componentDidMount() {
    beginTheBar();
    let page = this.getHeaderQuery().page || this.state.currentPage;
    let query = this.getHeaderQuery().q || this.state.searchMovieName;
    let layout = this.getHeaderQuery().layout || this.state.layoutMode;
    if (query !== "") {
      if (layout !== this.state.layoutMode) {
        this.setState({ layoutMode: layout });
      }
      if (page !== this.state.currentPage) {
        this.setState({ currentPage: page });
      }
    }
    this.pushToHistory(query, page, layout)

    this.setState({ currentPage: page, layoutMode: layout }, () => {
      this.search(() => {
        endTheBar();
      });
    });
  }

  handleMovieTitleInput = e => {
    this.setState({ searchMovieName: e.target.value });
  };

  handleLayoutChange = mode => {
    this.setState({ layoutMode: mode }, () => {
      this.pushToHistory(
        this.state.submitedMovieName,
        this.state.currentPage,
        this.state.layoutMode
      );
    });
  };

  pushToHistory = (query, page, layout) => {
    this.props.history.push(
      `/search?q=${encodeURIComponent(query)}&page=${page}&layout=${layout}`
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.searchMovieName === undefined) return;
    if (this.state.searchMovieName === "") return;
    beginTheBar();
    this.pushToHistory(
      this.state.searchMovieName,
      this.state.currentPage,
      this.state.layoutMode
    );

    this.setState({ submitedMovieName: this.state.searchMovieName }, () => {
      this.search(() => endTheBar());
    });
  };

  handlePageChange = page => {
    beginTheBar();
    this.setState({ currentPage: page }, () => {
      this.pushToHistory(
        this.state.submitedMovieName,
        this.state.currentPage,
        this.state.layoutMode
      );
      this.search(() => {
        endTheBar();
      });
    });
  };

  renderMoviesPosterList = movies => {
    return (
      <ul className="row">
        {movies.map(m => (
          <Movie key={m.id} movie={m} type={this.state.layoutMode} />
        ))}
      </ul>
    );
  };

  render() {
    const {
      total_pages: totalPages,
      page: currentPage,
      total_results: totalResults
    } = this.state.rawData;

    return (
      <div>
        <br />
        <div className="inline-form">
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
          <ListOrGrid
            active={this.state.layoutMode}
            changeLayout={e => this.handleLayoutChange(e)}
          />
        </div>
        <br />
        {this.state.movies === undefined || this.state.movies.length === 0 ? (
          <p>No Results</p>
        ) : (
          <div>
            <p>
              Showing <span className="font-weight-bold">{totalResults}</span>{" "}
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
    );
  }
}

export default Movies;
