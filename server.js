require('dotenv').config()

const path = require('path')

const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

// Middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
if (process.env.NODE_ENV === 'production') {
  // Serve up static assets (usually on heroku)
  app.use(express.static('client/build'))
} else {
  // Serve up static assets
  app.use(express.static('client/public'))
}

app.use(routes)

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

const PORT = process.env.PORT || 3005
app.listen(PORT, function () {
  console.log(`App now listening at PORT ${PORT}`)
})

module.exports = app
