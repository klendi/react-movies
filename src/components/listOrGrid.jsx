import React from 'react'

const ListOrGrid = props => {
  return (
    <nav className="listOrGrid">
      <ul className="pagination">
        <li
          onClick={() => props.changeLayout('grid')}
          className={props.active === 'grid' ? 'page-item active' : 'page-item'}
        >
          <div className="page-link">
            <i className="fa fa-th" aria-hidden="true" />
          </div>
        </li>
        <li
          onClick={() => props.changeLayout('list')}
          className={props.active === 'list' ? 'page-item active' : 'page-item'}
        >
          <div className="page-link">
            <i className="fa fa-list-ul" aria-hidden="true" />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default ListOrGrid
