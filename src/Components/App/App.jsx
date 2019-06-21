//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

import 'fullpage.js/vendors/scrolloverflow'; // must be loaded after jQuery and before ReactFullPage
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

//Constants
const SIZE_LARGE = 992;

//DEV ONLY *************REMOVE**************
//Debucsser CSS Debugger settings
const config = {
  color: 'red',
  width: '4px',
  grayscaleOnDebugAll: true
};
const debug = new Debucsser(config).init();
//DEV ONLY *************REMOVE**************

/**
 * App Class Component handles:
 * - rendering of:
 *    - navbar
 *    - content components
 * - passing screen size props to components
 * - ReactFullPage scrolling:
 *    - full page scrolling
 *    - scroll position updates to nav links
 *    - landing page behavior (ie. no navbar)
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLandingPage: true,
      viewHeight: 600, //default height
      screenSize: 'small' //default size
    };

    this.updateSize = this.updateSize.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }
  updateSize() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let { screenSize } = this.state;

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
  updateSectionLink(destination) {
    let { onLandingPage } = this.state;
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

    this.setState({
      onLandingPage: onLandingPage
    });
  }
  renderNav() {
    const { onLandingPage, viewHeight, screenSize } = this.state;

    //Do not render nav on landing page
    if (!onLandingPage) {
      return (
        <Navbar
          height={viewHeight}
          size={screenSize}
          links={<Links size={screenSize} />}
        />
      );
    }
  }
  renderContent() {
    const { viewHeight, screenSize } = this.state;
    const that = this;

    return (
      //Set options for fullpage.js
      <ReactFullPage
        licenseKey={'***REMOVED***'}
        anchors={['anchor-1', 'anchor-2', 'anchor-3', 'anchor-4', 'anchor-5']}
        menu={true}
        scrollOverflow={true}
        onLeave={function(origin, destination, direction) {
          that.updateSectionLink(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullPage.Wrapper>
              <div id="home" className="section">
                <Home height={viewHeight} fullpageApi={fullpageApi} />
              </div>
              <div id="about" className="section">
                <About height={viewHeight} />
              </div>
              <div id="skills" className="section">
                <Skills size={screenSize} height={viewHeight} />
              </div>
              <div id="portfolio" className="section">
                <Portfolio />
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
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
