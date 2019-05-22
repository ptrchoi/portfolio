import React, { Component } from 'react';
import $ from 'jquery';

import 'fullpage.js/vendors/scrolloverflow';
import ReactFullPage from '@fullpage/react-fullpage';

import Debucsser from 'debucsser';

//Components
import Navbar from '../navbar/Navbar';
import Links from '../links/Links';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

//Debucsser settings
const config = {
  color: 'red',
  width: '4px',
  grayscaleOnDebugAll: true
};
const debug = new Debucsser(config).init();

const SIZE_LARGE = 992;

/**
 * App Component handles:
 * - routing
 * - content components
 * - screen size updates
 * - Menu/Navigation:
 * - ReactFullPage options
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLandingPage: true,
      viewHeight: 600, //default height
      screenSize: 'small' //default size
    };

    this.updateSizeOnResize = this.updateSizeOnResize.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderContentComponents = this.renderContentComponents.bind(this);
  }
  componentDidMount() {
    this.updateSizeOnResize();
    window.addEventListener('resize', this.updateSizeOnResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSizeOnResize);
  }
  updateSizeOnResize() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let { screenSize } = this.state;

    //Set home page size for full screen bg img
    $(window).resize(function() {
      $('#home-section').css('height', height);
    });

    //Check for changes to screenSize
    if (screenSize === 'small' && width > SIZE_LARGE) {
      screenSize = 'large';
    } else if (screenSize === 'large' && width < SIZE_LARGE) {
      screenSize = 'small';
    }
    this.setState({
      viewHeight: height,
      screenSize: screenSize
    });
  }
  renderNav() {
    const { screenSize, onLandingPage } = this.state;

    if (!onLandingPage) {
      return <Navbar size={screenSize} links={<Links size={screenSize} />} />;
    }
  }
  renderContentComponents() {
    const { viewHeight, screenSize } = this.state;
    const that = this;

    function updateSectionLink(destination, that) {
      let { onLandingPage } = that.that.state;

      onLandingPage = false;
      $('.menu-link').removeClass('active-link');

      switch (destination) {
        case 1:
          $('#about-link').addClass('active-link');
          break;
        case 2:
          $('#skills-link').addClass('active-link');
          break;
        case 3:
          $('#portfolio-link').addClass('active-link');
          break;
        case 4:
          $('#contact-link').addClass('active-link');
          break;
        default:
          $('#home-link').addClass('active-link');
          onLandingPage = true;
          break;
      }

      that.that.setState({
        onLandingPage: onLandingPage
      });
    }
    return (
      //Set options for fullpage.js
      <ReactFullPage
        licenseKey={'***REMOVED***'}
        anchors={['anchor-1', 'anchor-2', 'anchor-3', 'anchor-4', 'anchor-5']}
        menu={true}
        scrollOverflow={true}
        onLeave={function(origin, destination, direction) {
          updateSectionLink(destination.index, { that });
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullPage.Wrapper>
              <div id="home" className="section">
                <Home height={viewHeight} fullpage_api={fullpageApi} />
              </div>
              <div id="about" className="section">
                <About height={viewHeight} />
              </div>
              <div id="skills" className="section">
                <Skills size={screenSize} height={viewHeight} />
              </div>
              <div id="portfolio" className="section">
                <Portfolio height={viewHeight} />
              </div>
              <div id="contact" className="section">
                <Contact height={viewHeight} />
              </div>
            </ReactFullPage.Wrapper>
          );
        }}
      />
    );
  }
  render() {
    return (
      <div>
        {this.renderNav()}
        {this.renderContentComponents()}
      </div>
    );
  }
}

export default App;
