import React, { Component } from 'react'
import Movie from './movie'
import Pagination from './pagination'
import { getTopRated } from '../services/moviesService'

class TopRated extends Component {
  state = {
    movies: [],
    rawData: []
  }

  componentDidMount() {
    getTopRated().then(movies => {
      this.setState({ movies: movies.results, rawData: movies })
    })
  }

  render() {
    const { movies } = this.state
    const { total_pages: totalPages, page: currentPage } = this.state.rawData

    return (
      <div>
        <h1 className="movies-main-header display-4">Top Rated</h1>
        <br />
        <br />
        <ul className="row">
          {movies.map(m => (
            <Movie key={m.id} movie={m} />
          ))}
        </ul>
        <Pagination
          pageCount={totalPages || 1}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    )
  }
}

export default TopRated
