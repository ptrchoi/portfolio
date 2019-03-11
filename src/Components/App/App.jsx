import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

//Components
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <BrowserRouter>
          <div>
            <div id="nav">
              <ul className="menu">
                <li>
                  <NavLink
                    to="/#home"
                    scroll={el =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#about"
                    scroll={el =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#skills"
                    scroll={el =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    Skills
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="contentWrapper">
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="skills">
                <Skills />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
