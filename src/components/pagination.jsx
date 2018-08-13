import React, { Component } from 'react'
import _ from 'lodash'

class Pagination extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    leftBreak: false,
    rightBreak: true
  }

  generatePaginationArray = (pageCount, currentIndex) => {
    if (currentIndex <= 3) return _.range(1, 6)
    else if (currentIndex >= 4 && currentIndex < pageCount - 3)
      return _.range(currentIndex - 2, currentIndex + 3)
    else if (currentIndex >= pageCount - 3)
      return _.range(pageCount - 4, pageCount + 1)
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  onPageClick = page => {
    if (page >= 4) {
      this.setState({
        leftBreak: true
      })
    }
    if (page < 4) {
      this.setState({
        leftBreak: false
      })
    }
    if (page >= this.props.pageCount - 3) {
      this.setState({
        rightBreak: false
      })
    }
    if (page < this.props.pageCount - 3) {
      this.setState({
        rightBreak: true
      })
    }

    this.props.onPageChange(page)
    this.scrollToTop()
  }

  render() {
    const { pageCount, currentPage, onPageChange } = this.props

    if (pageCount === 1 || pageCount === 0) return null
    const pagesArr = _.range(1, pageCount + 1)
    let newPagesArr = this.generatePaginationArray(pageCount, currentPage)

    if (pageCount <= 6) {
      return (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li
              className={
                currentPage === 1 || currentPage === 0
                  ? 'page-item disabled'
                  : 'page-item'
              }
            >
              <span
                onClick={() => onPageChange(currentPage)}
                className="page-link"
              >
                Previous
              </span>
            </li>
            {pagesArr.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
              >
                <div className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </div>
              </li>
            ))}
            <li
              className={
                currentPage === pageCount ? 'page-item disabled' : 'page-item'
              }
            >
              <span
                onClick={() => onPageChange(currentPage + 1)}
                className="page-link"
              >
                Next
              </span>
            </li>
          </ul>
        </nav>
      )
    }
    if (pageCount > 6) {
      return (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li
              className={
                currentPage === 1 || currentPage === 0
                  ? 'page-item disabled'
                  : 'page-item'
              }
            >
              <span
                onClick={() => this.onPageClick(currentPage - 1)}
                className="page-link"
              >
                Previous
              </span>
            </li>
            {this.state.leftBreak ? (
              <li className="page-item">
                <span onClick={() => this.onPageClick(1)} className="page-link">
                  1
                </span>
              </li>
            ) : null}
            {this.state.leftBreak ? (
              <li className="page-item disabled">
                <span
                  onClick={() => this.onPageClick(currentPage - 1)}
                  className="page-link"
                >
                  ....
                </span>
              </li>
            ) : null}
            {newPagesArr.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
              >
                <div
                  className="page-link"
                  onClick={() => this.onPageClick(page)}
                >
                  {page}
                </div>
              </li>
            ))}
            {this.state.rightBreak ? (
              <li className="page-item disabled">
                <span
                  onClick={() => this.onPageClick(currentPage - 1)}
                  className="page-link"
                >
                  ...
                </span>
              </li>
            ) : null}

            {this.state.rightBreak ? (
              <li className="page-item">
                <span
                  onClick={() => this.onPageClick(pageCount)}
                  className="page-link"
                >
                  {pageCount}
                </span>
              </li>
            ) : null}

            <li
              className={
                currentPage >= pageCount ? 'page-item disabled' : 'page-item'
              }
            >
              <span
                onClick={() => this.onPageClick(currentPage + 1)}
                className="page-link"
              >
                Next
              </span>
            </li>
          </ul>
        </nav>
      )
    }
  }
}

export default Pagination
