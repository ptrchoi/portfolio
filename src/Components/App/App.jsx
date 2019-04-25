import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import $ from 'jquery';
import Debucsser from 'debucsser';

//Components
import Navbar from '../Navbar/Navbar';
import Links from '../Links/Links';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

//Debucsser settings
const config = {
  color: 'red',
  width: '4px',
  grayscaleOnDebugAll: true
};
const debug = new Debucsser(config).init();

const MIN_WIDTH = 1224;
const MAX_WIDTH = 1224;

//TEMP UNTIL COMPONENT HEIGHTS ARE SET
// const ABOUT_SECTION_HEIGHT = 800;
// const SKILLS_SECTION_HEIGHT = 1600;
// const PORTFOLIO_SECTION_HEIGHT = 2400;

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
      landingPageHeight: 600, //initial default height
      viewWidth: 'narrow', //initial default width
      onLandingPage: true,
      activeLink: '#home'
    };

    this.updateLinksOnScroll = this.updateLinksOnScroll.bind(this);
    this.updateViewDimensions = this.updateViewDimensions.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderContentComponents = this.renderContentComponents.bind(this);
  }
  componentDidMount() {
    this.updateLinksOnScroll();
    this.updateViewDimensions();

    window.addEventListener('scroll', this.updateLinksOnScroll);
    window.addEventListener('resize', this.updateViewDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateLinksOnScroll);
    window.removeEventListener('resize', this.updateViewDimensions);
  }
  updateLinksOnScroll() {
    let { onLandingPage, activeLink } = this.state;
    const scrollPos =
      document.body.scrollTop || document.documentElement.scrollTop;

    //Size/Flow for section containers are responsive/dynamic,
    //Get the CURRENT topPos's for each content-section
    let sections = [];
    $('.content-section').each(function(i) {
      let topPos = $(this).offset().top;
      sections[i] = {
        topPos: topPos
      };
    });

    //Remove current status from all links
    $('.menuLink').removeClass('activeLink');
    onLandingPage = false;

    //Compare current scrollPos against each consecutive section's topPos
    //& set appropriate activeLink
    if (scrollPos < sections[1].topPos) {
      $('#menu-home').addClass('activeLink');
      activeLink = '#home';
      onLandingPage = true;
    } else if (scrollPos < sections[2].topPos) {
      $('#menu-about').addClass('activeLink');
      activeLink = '#about';
    } else if (scrollPos < sections[3].topPos) {
      $('#menu-skills').addClass('activeLink');
      activeLink = '#skills';
    } else if (scrollPos < sections[4].topPos) {
      $('#menu-portfolio').addClass('activeLink');
      activeLink = '#portfolio';
    } else {
      $('#menu-contact').addClass('activeLink');
      activeLink = '#contact';
    }

    this.setState({
      onLandingPage: onLandingPage,
      activeLink: activeLink
    });
  }
  updateViewDimensions() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let { viewWidth } = this.state;

    $(window).resize(function() {
      $('#home-section').css('height', height);
    });
    if (viewWidth === 'narrow' && width > MAX_WIDTH) {
      viewWidth = 'wide';
    } else if (viewWidth === 'wide' && width < MAX_WIDTH) {
      viewWidth = 'narrow';
    }
    this.setState({
      landingPageHeight: height,
      viewWidth: viewWidth
    });
  }
  renderNav() {
    return (
      <BrowserRouter>
        <div>
          <MediaQuery minDeviceWidth={MIN_WIDTH}>
            <Navbar
              mq={'wide'}
              links={<Links size={'wide'} activeLink={this.state.activeLink} />}
            />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={MAX_WIDTH}>
            <Navbar
              mq={'narrow'}
              links={
                <Links size={'narrow'} activeLink={this.state.activeLink} />
              }
            />
          </MediaQuery>
        </div>
      </BrowserRouter>
    );
  }
  renderContentComponents() {
    return (
      <div className="content-wrapper">
        <div id="home" className="content-section">
          <Home height={this.state.landingPageHeight} />
        </div>
        <div id="about" className="content-section">
          <About />
        </div>
        <div id="skills" className="content-section">
          <Skills size={this.state.viewWidth} />
        </div>
        <div id="portfolio" className="content-section">
          <Portfolio />
        </div>
        <div id="contact" className="content-section">
          <Contact />
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
