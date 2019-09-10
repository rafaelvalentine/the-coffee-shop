import React, { Component, Fragment } from 'react'
// import { Container } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

class App extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </Router>

    )
  }
}

export default App
