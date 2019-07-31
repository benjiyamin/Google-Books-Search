import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

function NavItem ({ children }) {
  return (
    <li className='nav-item'>
      {children}
    </li>
  )
}
NavItem.propTypes = {
  children: PropTypes.node.isRequired
}

function NavItems ({ children }) {
  return (
    <ul className='navbar-nav ml-auto'>
      {children}
    </ul>
  )
}
NavItems.propTypes = {
  children: PropTypes.node.isRequired
}

function NavBar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>Google Books <small className='text-mute'>Search</small></Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'
        aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <NavItems>
          <NavItem>
            <Link className='nav-item nav-link' to='/'>Search</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-item nav-link' to='/saved'>Saved</Link>
          </NavItem>
        </NavItems>
      </div>
    </nav>
  )
}
export default NavBar
