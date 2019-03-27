import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';

import C from '../../constants';

//Components
import Navbar from '../Navbar/Navbar';
import Links from '../Links/Links';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateNavOnScroll = this.updateNavOnScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOnScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOnScroll);
  }
  updateNavOnScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;

    $('.menuLink').removeClass('activeLink');

    // Check page location and update activeLink as needed
    if (scrolled < C.ABOUT_TOP - C.SCROLL_TOP_OFFSET) {
      $('#menu-home').toggleClass('activeLink');
    } else if (scrolled < C.SKILLS_TOP - C.SCROLL_TOP_OFFSET) {
      $('#menu-about').toggleClass('activeLink');
    } else {
      $('#menu-skills').toggleClass('activeLink');
    }
  }
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <div>
            <MediaQuery query="(min-device-width: 1224px)">
              <Navbar mq={'wide'} links={<Links size={'wide'} />} />
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <Navbar mq={'narrow'} links={<Links size={'narrow'} />} />
            </MediaQuery>
          </div>
        </BrowserRouter>
        <div className="content-wrapper">
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
