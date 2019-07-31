import axios from 'axios'

export default {
  searchBooks: terms => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${terms}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
  },
  getBooks: () => axios.get(`/api/books`), // Gets all books
  getBook: id => axios.get(`/api/books/${id}`), // Gets the book with the given id
  deleteBook: id => axios.delete(`/api/books/${id}`), // Deletes the book with the given id
  saveBook: bookData => axios.post('/api/books', bookData) // Saves a book to the database
}
