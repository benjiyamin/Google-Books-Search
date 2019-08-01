import React, { Component } from 'react'
import PropTypes from 'prop-types'

import queryString from 'query-string'

import API from '../utils/API'

import Jumbotron from '../components/Jumbotron'
import Section from '../components/Section'
import BookCard from '../components/BookCard'

function SearchResults ({ books }) {
  return (
    <div className='row'>
      { books ? books.map((book, i) => {
        return (
          <div key={i} className='col-6'>
            <BookCard
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
              link={book.volumeInfo.infoLink}
            />
          </div>
        )
      }) : null
      }
    </div>
  )
}
SearchResults.propTypes = {
  books: PropTypes.array
}

class SearchPage extends Component {
  state = {
    search: queryString.parse(this.props.location.search).search || '',
    books: []
  }

  loadBooks = () => {
    API.searchBooks(this.state.search)
      .then(res => {
        this.setState({
          books: res.data.items,
          search: ''
        })
        console.log(this.state.books)
      })
      .catch(error => console.error(error))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.loadBooks()
    // this.setState({ search: '' })
  }
  render () {
    return (
      <div>
      <div className='col mx-3'>
                    <input className='form-control form-control-borderless mr-sm-2' type='search' name='search'
                      placeholder='Search books' id='searchInput' value={this.state.search}
                      onChange={this.handleInputChange} />
                  </div>
                  <div className='col-auto'>
                    <button className='btn btn-outline-success my-2 my-sm-0' id='searchBtn'
                      disabled={!this.state.search} onClick={this.handleFormSubmit}>
                    Search
                    </button>
                  </div>
      <Section header='Results'>
        <SearchResults books={this.state.books} />
      </Section>
      </div>
    )
  }
  renderz () {
    return (
      <div className='container'>
        <Jumbotron />
        <Section header='Book Search'>
          <div className='row justify-content-center my-4'>
            <div className='col-12'>
              <div className='card card-sm'>
                <div className='card-body row no-gutters align-items-center'>
                  <div className='col-auto'>
                    <i className='fas fa-search h4 text-body mt-2' />
                  </div>
                  <div className='col mx-3'>
                    <input className='form-control form-control-borderless mr-sm-2' type='search' name='search'
                      placeholder='Search books' id='searchInput' value={this.state.search}
                      onChange={this.handleInputChange} />
                  </div>
                  <div className='col-auto'>
                    <button className='btn btn-outline-success my-2 my-sm-0' id='searchBtn'
                      disabled={!this.state.search} onClick={this.handleFormSubmit}>
                    Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section header='Results'>
          <SearchResults books={this.state.books} />
        </Section>
      </div>
    )
  }
}
SearchPage.propTypes = {
  location: PropTypes.object,
  search: PropTypes.string
}

export default SearchPage
