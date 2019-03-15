import React from 'react';
import $ from 'jquery';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import C from '../../constants';
import Sidebar from '../Sidebar/Sidebar';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.updateNavOnScroll = this.updateNavOnScroll.bind(this);
  }
  updateNavOnScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    // console.log('scrolled: ', scrolled);

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
  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOnScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOnScroll);
  }
  render() {
    const changeActiveNavClass = () => {
      //get current location on screen and set active link
      console.log('change active nav class!');
      console.log('window.pageYOffset: ', window.pageYOffset);
      //$('.activeLink').css('border', '3px solid red');
      $('.menuLink').toggleClass('activeLink');
    };
    const testActive = to => (match, location) => to === location.hash;

    return (
      <div>
        <div id="navbar">
          <ul className="menu">
            <div className="links-wrapper links--left">
              <li id="menu-icon">
                <Sidebar />
              </li>
              <li id="name">Peter Choi</li>
            </div>
            <div className="links-wrapper links--right">
              <li>
                <NavLink
                  id="menu-home"
                  className="menuLink"
                  to="/#home"
                  isActive={testActive('#home')}
                  exact
                  activeClassName={'activeLink'}
                  scroll={el =>
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  id="menu-about"
                  className="menuLink"
                  to="/#about"
                  isActive={testActive('#about')}
                  exact
                  activeClassName={'activeLink'}
                  scroll={el =>
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  id="menu-skills"
                  className="menuLink"
                  to="/#skills"
                  isActive={testActive('#skills')}
                  exact
                  activeClassName={'activeLink'}
                  scroll={el =>
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                >
                  Skills
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <div id="test-div">
          <button className="menuTestButton" onClick={changeActiveNavClass}>
            Toggle active nav class
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
