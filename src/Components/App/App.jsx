import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import $ from 'jquery';

import C from '../../constants';

//Components
import Navbar from '../Navbar/Navbar';
import Links from '../Links/Links';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';

//TEMP UNTIL COMPONENT HEIGHTS ARE SET
const ABOUT_SECTION_HEIGHT = 800;

/**
 * App Component handles:
 * - routing
 * - content components
 * - Menu/Navigation:
 *    - page scroll updating
 *    - media query layouts
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingPageHeight: 800,
      onLandingPage: true
    };

    this.updateNavOnScroll = this.updateNavOnScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOnScroll);

    //Set the height of the Landing Page
    let height = window.innerHeight;
    $(window).resize(function() {
      $('#home-section').css('height', height);
    });
    this.setState({
      landingPageHeight: height
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOnScroll);
  }
  updateNavOnScroll() {
    let { landingPageHeight, onLandingPage } = this.state;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    $('.menuLink').removeClass('activeLink');

    // Check page scroll location/height and update activeLink & onLandingPage as needed
    if (winScroll < landingPageHeight) {
      $('#menu-home').toggleClass('activeLink');
      onLandingPage = true;
    } else if (winScroll < landingPageHeight + ABOUT_SECTION_HEIGHT) {
      $('#menu-about').toggleClass('activeLink');
      onLandingPage = false;
    } else {
      $('#menu-skills').toggleClass('activeLink');
      onLandingPage = false;
    }
    this.setState({
      onLandingPage: onLandingPage
    });
  }
  render() {
    const { onLandingPage } = this.state;

    if (onLandingPage) {
      return (
        <div className="app-wrapper">
          <div className="content-wrapper">
            <div id="home">
              <Home height={this.state.landingPageHeight} />
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
    } else {
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
              <Home height={this.state.landingPageHeight} />
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
}

export default App;
