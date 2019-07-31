import React, { Component } from 'react'
import PropTypes from 'prop-types'

import API from '../utils/API'
import Jumbotron from '../components/Jumbotron'
import Section from '../components/Section'
import BookCard from '../components/BookCard'

function SavedBooks ({ books }) {
  return (
    <div className='row'>
      { books ? books.map((book, i) => {
        return (
          <div className='col-6' key={i}>
            <BookCard
              id={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
            />
          </div>
        )
      }) : null
      }
    </div>
  )
}
SavedBooks.propTypes = {
  books: PropTypes.array
}

class SearchPage extends Component {
  state = {
    books: []
  }

  componentDidMount () {
    this.loadBooks()
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(error => console.error(error))
  }

  render () {
    return (
      <div className='container'>
        <Jumbotron />
        <Section header='Saved Books'>
          {this.state.books ? <SavedBooks books={this.state.books} /> : null}
        </Section>
      </div>
    )
  }
}

export default SearchPage
