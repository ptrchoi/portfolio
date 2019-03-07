import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

//Components
import Home from './Home';
import About from './About';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="menu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
          </ul>

          <div className="contentContainer">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
