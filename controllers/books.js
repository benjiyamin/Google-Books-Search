const mongojs = require('mongojs')

const db = require('../models')

module.exports = {
  findAll: (req, res) => {
    db.Book.find({})
      .then(dbBooks => res.json(dbBooks))
      .catch(error => {
        res.status(500).end()
        throw error
      })
  },
  findById: (req, res) => {
    db.Book.find({ _id: req.params.id })
      .then(dbBook => res.json(dbBook))
      .catch(error => {
        res.status(500).end() // Internal Server Error
        throw error
      })
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(error => {
        res.status(500).end() // Internal Server Error
        throw error
      })
  },
  update: (req, res) => {
    return false
  },
  remove: (req, res) => {
    db.Book.remove({ _id: mongojs.ObjectID(req.params.id) })
      .then(dbRemoved => res.json(dbRemoved))
      .catch(error => {
        res.status(500).end() // Internal Server Error
        throw error
      })
  }
}
