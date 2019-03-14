import React from 'react';
import $ from 'jquery';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.listenToScroll = this.listenToScroll.bind(this);
  }
  listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    console.log('scrolled: ', scrolled);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
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
      <div id="nav">
        <ul className="menu">
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
              id="menu-skill"
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
        </ul>
        <div>
          <button className="menuTestButton" onClick={changeActiveNavClass}>
            Toggle active nav class
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
