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
      landingPageHeight: 0,
      onLandingPage: true,
      activeLink: '#home'
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
    let { onLandingPage, activeLink } = this.state;
    const scrollPos =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log('scrollPos: ', scrollPos);

    //Get array of content-sections scrollTop
    let sections = [];

    $('.content-section').each(function(i) {
      let topPos = $(this).offset().top;
      let curId = 'menu-' + $(this).attr('id');
      console.log('i: ', i, ' | id: ', curId, ' | topPos: ', topPos);
      sections[i] = {
        id: curId,
        topPos: topPos
      };
    });

    //Remove activeLink from all links
    $('.menuLink').removeClass('activeLink');
    onLandingPage = false;

    //Compare current scrollPos against each consecutive section topPos's
    //& set activeLink
    if (scrollPos < sections[1].topPos) {
      console.log('scrollPos set to Home');
      $('#menu-home').addClass('activeLink');
      activeLink = '#home';
      onLandingPage = true;
    } else if (scrollPos < sections[2].topPos) {
      console.log('scrollPos set to About');
      $('#menu-about').addClass('activeLink');
      activeLink = '#about';
    } else if (scrollPos < sections[3].topPos) {
      console.log('scrollPos set to Skills');
      $('#menu-skills').addClass('activeLink');
      activeLink = '#skills';
    } else if (scrollPos < sections[4].topPos) {
      console.log('scrollPos set to Portfolio');
      $('#menu-portfolio').addClass('activeLink');
      activeLink = '#portfolio';
    } else {
      console.log('scrollPos set to Contact');
      $('#menu-contact').addClass('activeLink');
      activeLink = '#contact';
    }

    // Check page scroll location/height and update activeLink & onLandingPage as needed
    // if (scrollPos < landingPageHeight) {
    //   $('#menu-home').toggleClass('activeLink');
    //   onLandingPage = true;
    // } else if (scrollPos < landingPageHeight + ABOUT_SECTION_HEIGHT) {
    //   $('#menu-about').toggleClass('activeLink');
    // } else if (scrollPos < landingPageHeight + SKILLS_SECTION_HEIGHT) {
    //   $('#menu-skills').toggleClass('activeLink');
    // } else if (scrollPos < landingPageHeight + PORTFOLIO_SECTION_HEIGHT) {
    //   $('#menu-portfolio').toggleClass('activeLink');
    // } else {
    //   $('#menu-contact').toggleClass('activeLink');
    // }
    this.setState({
      onLandingPage: onLandingPage,
      activeLink: activeLink
    });
  }
  updateLandingPageHeight() {
    let height = window.innerHeight;

    $(window).resize(function() {
      $('#home-section').css('height', height);
    });
    console.log('updateLandingPageHeight, height: ', height);
    this.setState({
      landingPageHeight: height
    });
  }
  renderNav() {
    return (
      <BrowserRouter>
        <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Navbar
              mq={'wide'}
              links={<Links size={'wide'} activeLink={this.state.activeLink} />}
            />
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
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
          <Skills />
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
