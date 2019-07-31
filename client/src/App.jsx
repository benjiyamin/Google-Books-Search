import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchPage from './pages/Search'
import SavedPage from './pages/Saved'
import StatusPage from './pages/Status'
import './App.css'

function App () {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/saved' component={SavedPage} />
          <Route component={StatusPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
