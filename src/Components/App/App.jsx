import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
 *    - page scroll updating
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLandingPage: true,
      viewHeight: 600, //default height
      screenSize: 'small' //default size
    };

    // this.updateLinksOnScroll = this.updateLinksOnScroll.bind(this);
    this.updateSizeOnResize = this.updateSizeOnResize.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderContentComponents = this.renderContentComponents.bind(this);
  }
  componentDidMount() {
    // this.updateLinksOnScroll();
    this.updateSizeOnResize();

    // window.addEventListener('scroll', this.updateLinksOnScroll);
    window.addEventListener('resize', this.updateSizeOnResize);
  }
  componentWillUnmount() {
    // window.removeEventListener('scroll', this.updateLinksOnScroll);
    window.removeEventListener('resize', this.updateSizeOnResize);
  }
  // updateLinksOnScroll() {
  //   let { onLandingPage, activeLink } = this.state;
  //   const scrollPos =
  //     document.body.scrollTop || document.documentElement.scrollTop;

  //   //Size/Flow for section containers are responsive/dynamic,
  //   //Get the CURRENT topPos's for each section
  //   let sections = [];
  //   $('.section').each(function(i) {
  //     let topPos = $(this).offset().top;
  //     sections[i] = {
  //       topPos: topPos
  //     };
  //   });

  //   //Remove current status from all links
  //   $('.menuLink').removeClass('activeLink');
  //   onLandingPage = false;

  //   console.log('scrollPos: ', scrollPos);

  //   //Compare current scrollPos against each consecutive section's topPos
  //   //& set appropriate activeLink
  //   if (scrollPos < sections[1].topPos) {
  //     $('#menu-home').addClass('activeLink');
  //     activeLink = '#home';
  //     onLandingPage = true;
  //   } else if (scrollPos < sections[2].topPos) {
  //     $('#menu-about').addClass('activeLink');
  //     activeLink = '#about';
  //   } else if (scrollPos < sections[3].topPos) {
  //     $('#menu-skills').addClass('activeLink');
  //     activeLink = '#skills';
  //   } else if (scrollPos < sections[4].topPos) {
  //     $('#menu-portfolio').addClass('activeLink');
  //     activeLink = '#portfolio';
  //   } else {
  //     $('#menu-contact').addClass('activeLink');
  //     activeLink = '#contact';
  //   }

  //   this.setState({
  //     onLandingPage: onLandingPage,
  //     activeLink: activeLink
  //   });
  // }
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
    const { screenSize } = this.state;

    console.log('renderNav called');

    return (
      <BrowserRouter>
        <Navbar size={screenSize} links={<Links size={screenSize} />} />
      </BrowserRouter>
    );
  }
  renderContentComponents() {
    const { viewHeight, screenSize } = this.state;

    return (
      //Set options for fullpage.js
      // - scrollOverflow = true, allows for longer sections to scroll normally
      // - wrapper requires divs with className="section"
      <ReactFullPage
        licenseKey={'***REMOVED***'}
        anchors={[
          'menu-home',
          'menu-about',
          'menu-skills',
          'menu-portfolio',
          'menu-contact'
        ]}
        menu={true}
        scrollOverflow={true}
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
    const { onLandingPage } = this.state;

    // console.log('onLandingPage: ', onLandingPage);
    // if (onLandingPage) {
    //   return <div>{this.renderContentComponents()}</div>;
    // } else {
    return (
      <div>
        {this.renderNav()}
        {this.renderContentComponents()}
      </div>
    );
    //   }
  }
}

export default App;
