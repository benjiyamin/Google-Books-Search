const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String,
  link: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Book', BookSchema)
