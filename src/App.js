import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Notfound from './pages/Notfound'
import {
    Route,
    Switch,
} from 'react-router-dom'


class App extends Component {
  render() {
      return <div>
          <header className="App-header">
              <h1 className="App-title">Kevin Gauer Resume</h1>
          </header>
          <body>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/education' component={Education}/>
              <Route path='/experience' component={Experience}/>
              <Route component={Notfound}/>
          </Switch>
          </body>
      </div>
  }
}

export default App;
