import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Menu from '../Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
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
    );
  }
}

export default App;
