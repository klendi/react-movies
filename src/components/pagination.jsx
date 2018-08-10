import React from 'react'
import _ from 'lodash'

const Pagination = props => {
  const { pageCount, currentPage, onPageChange } = props
  if (pageCount === 1 || pageCount === 0) return null
  const pagesArr = _.range(1, pageCount + 1)

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={
            currentPage === 1 || currentPage === 0
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <span
            onClick={() => onPageChange(currentPage - 1)}
            className="page-link"
          >
            Previous
          </span>
        </li>
        {pagesArr.map(page => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
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

export default Pagination
