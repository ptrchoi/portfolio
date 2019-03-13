import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(value) {
    // let active = false;
    // const { router } = this.context;
    // const { path } = this.props;
    // console.log('router: ', router);
    // console.log('path: ', path);
    console.log('clickHandler received value: ', value);
  }
  render() {
    return (
      <div className="appWrapper">
        <BrowserRouter>
          <Menu onNavLinkClick={this.clickHandler} />
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
