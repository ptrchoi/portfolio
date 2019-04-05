import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import $ from 'jquery';

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
      landingPageHeight: ABOUT_SECTION_HEIGHT,
      onLandingPage: true
    };

    this.updateLinksOnScroll = this.updateLinksOnScroll.bind(this);
    this.updateLandingPageHeight = this.updateLandingPageHeight.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderContentComponents = this.renderContentComponents.bind(this);
  }
  componentDidMount() {
    this.updateLinksOnScroll();
    this.updateLandingPageHeight();

    window.addEventListener('scroll', this.updateLinksOnScroll);
    window.addEventListener('resize', this.updateLandingPageHeight);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateLinksOnScroll);
    window.removeEventListener('resize', this.updateLandingPageHeight);
  }
  updateLinksOnScroll() {
    let { landingPageHeight, onLandingPage } = this.state;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    $('.menuLink').removeClass('activeLink');
    onLandingPage = false;

    // Check page scroll location/height and update activeLink & onLandingPage as needed
    if (winScroll < landingPageHeight) {
      $('#menu-home').toggleClass('activeLink');
      onLandingPage = true;
    } else if (winScroll < landingPageHeight + ABOUT_SECTION_HEIGHT) {
      $('#menu-about').toggleClass('activeLink');
    } else {
      $('#menu-skills').toggleClass('activeLink');
    }
    this.setState({
      onLandingPage: onLandingPage
    });
  }
  updateLandingPageHeight() {
    let height = window.innerHeight;

    $(window).resize(function() {
      $('#home-section').css('height', height);
    });
    this.setState({
      landingPageHeight: height
    });
  }
  renderNav() {
    return (
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
    );
  }
  renderContentComponents() {
    return (
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
    );
  }
  render() {
    const { onLandingPage } = this.state;

    if (onLandingPage) {
      return <div>{this.renderContentComponents()}</div>;
    } else {
      return (
        <div>
          {this.renderNav()}
          {this.renderContentComponents()}
        </div>
      );
    }
  }
}

export default App;
