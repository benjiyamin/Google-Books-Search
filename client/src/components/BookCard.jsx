import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ellipsis } from '../utils/string'
import API from '../utils/API'

/*
class DeleteBtn extends Component {
  state = {
    bookId: null
  }

  componentDidMount () {
    this.setState({
      bookId: this.props.bookId
    })
  }

  deleteBook () {
    API.deleteBook(this.state.bookId)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <button type='button' onClick={this.deleteBook} className='btn btn-primary btn-lg'>Save</button>
    )
  }
}
DeleteBtn.propTypes = {
  bookId: PropTypes.number.isRequired
}

class SaveBtn extends Component {
  state = {
    book: null
  }

  componentDidMount () {
    this.setState({
      book: this.props.book
    })
  }

  saveBook () {
    API.deleteBook(this.state.bookId)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <button type='button' onClick={this.deleteBook} className='btn btn-primary btn-lg'>Save</button>
    )
  }
}
SaveBtn.propTypes = {
  book: PropTypes.object.isRequired
}
*/

function DeleteBtn ({ clickFunction }) {
  return (
    <button type='button' onClick={clickFunction} className='btn btn-link text-shadow text-danger'>
      <i className='fas fa-heart' />
    </button>
  )
}
DeleteBtn.propTypes = {
  clickFunction: PropTypes.func
}

function SaveBtn ({ clickFunction }) {
  return (
    <button type='button' onClick={clickFunction} className='btn btn-link text-shadow text-muted'>
      <i className='fas fa-heart' />
    </button>
  )
}
SaveBtn.propTypes = {
  clickFunction: PropTypes.func
}

class BookCard extends Component {
  state = {
    id: null,
    title: null,
    authors: null,
    description: null,
    image: null,
    link: null
  }

  componentDidMount () {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      authors: this.props.authors,
      description: this.props.description,
      image: this.props.image,
      link: this.props.link
    })
  }

  deleteBook = () => {
    API.deleteBook(this.state.id)
      .then(res => this.setState({ id: null }))
      .catch(err => console.log(err))
  }

  saveBook = () => {
    API.saveBook({
      title: this.state.title,
      authors: this.state.authors,
      description: this.state.description,
      image: this.state.image,
      link: this.state.link
    })
      .then(res => this.setState({
        id: res.data._id,
        title: res.data.title,
        authors: res.data.authors,
        description: res.data.description,
        image: res.data.image,
        link: res.data.link
      }))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='card mb-3 w-100'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={this.state.image} className='card-img' alt='' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <div>
                <h5 className='card-title'>{this.state.title}
                  <div className='float-right'>
                    {this.state.id ? <DeleteBtn clickFunction={this.deleteBook} /> : <SaveBtn clickFunction={this.saveBook} />}
                  </div>
                </h5>
              </div>
              <h6 className='card-subtitle mb-2 text-muted'>{this.state.authors}</h6>
              <p className='card-text'>{ellipsis(this.state.description, 140)}</p>
              <a target='_blank' rel='noopener noreferrer' href={this.state.link} className='btn btn-primary btn-lg'>View</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
BookCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
}

export default BookCard
