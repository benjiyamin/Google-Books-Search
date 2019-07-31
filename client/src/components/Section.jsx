import React from 'react'
import PropTypes from 'prop-types'

function Section ({ children, header }) {
  return (
    <section className='my-4'>
      {header ? <h1>{header}</h1> : null}
      {children}
    </section>
  )
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string
}

export default Section
