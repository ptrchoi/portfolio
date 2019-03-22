import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';

//Components
import Links from '../Links/Links';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';

function Menu(size) {
  console.log('received size.size: ', size.size);

  if (size.size === 'wide') {
    console.log('returning wide menu');
    return (
      <div className="navbarWrapper">
        <Navbar title={<Title />} links={<Links />} />
      </div>
    );
  } else {
    console.log('returning narrow menu');
    return (
      <div className="sidebarWrapper">
        <Sidebar links={<Links />} />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'wide'
    };

    this.swapMenuHandler = this.swapMenuHandler.bind(this);
  }
  swapMenuHandler() {
    const { menu } = this.state;

    console.log('swapping menu from: ', menu);

    if (menu === 'wide') {
      this.setState({
        menu: 'narrow'
      });
    } else {
      this.setState({
        menu: 'wide'
      });
    }
  }
  render() {
    const { menu } = this.state;
    return (
      <div className="appWrapper">
        <BrowserRouter>
          <div className="menusWrapper">
            <button onClick={this.swapMenuHandler}>SWAP MENU</button>
            <Menu size={menu} />
          </div>
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
