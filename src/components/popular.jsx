import React, { Component } from 'react'
import Pagination from './pagination'
import Movie from './movie'
import { getPopular } from '../services/moviesService'
import Paginate from 'react-paginate'

class Popular extends Component {
  state = {
    movies: [],
    rawData: []
  }

  componentDidMount() {
    getPopular().then(movies => {
      this.setState({ movies: movies.results, rawData: movies })
    })
  }

  render() {
    const { movies } = this.state
    const {
      total_pages: totalPages,
      page: currentPage,
      total_results: totalResults
    } = this.state.rawData
    return (
      <div>
        <h1 className="movies-main-header display-4">Popular</h1>
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
        <Paginate
          reviousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={<a href="">...</a>}
          breakClassName={'break-me'}
          pageCount={totalPages || 1}
          marginPagesDisplayed={10}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          containerClassName={'pagination justify-content-center'}
          subContainerClassName={'page-item'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default Popular
