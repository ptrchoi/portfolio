//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

//Components
import C from '../../constants';
import Title from '../title/Title';
import Sidebar from '../sidebar/Sidebar';
import Overlay from '../overlay/Overlay';
import MenuIcon from '../menuIcon/MenuIcon';

/**
 * Class component, renders responsive menu components, matching parent element's width upon resize(), toggles and passes down sidebar status.
 * @param {object} props - { size } .
 * @return {JSX.Element} - Rendered component, with large format navbar OR small with icon & sidebar.
 */
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarIsOpen: false,
      sidebarReady: true
    };

    this.matchParentWidth = this.matchParentWidth.bind(this);
    this.checkSidebarState = this.checkSidebarState.bind(this);
    this.toggleSidebarAndOverlay = this.toggleSidebarAndOverlay.bind(this);
  }
  componentDidMount() {
    //Initialize width to match parent container, then listen for resize events
    this.matchParentWidth();
    window.addEventListener('resize', this.matchParentWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.matchParentWidth);
  }
  matchParentWidth() {
    let parentWidth = $('.nav-wrapper')
      .parent()
      .width();
    $('.nav-wrapper').width(parentWidth);
  }
  checkSidebarState() {
    let { sidebarReady } = this.state;

    if (sidebarReady) {
      this.toggleSidebarAndOverlay();
      this.setState({
        sidebarReady: false
      });
    }
    return sidebarReady; //Return T||F to onClick() callbacks
  }
  toggleSidebarAndOverlay() {
    let el = $('#navSidebar');
    let bg = $('#overlay');

    if (el.hasClass('navSidebar-on')) {
      //Delay removing .navSidebar-on class until slide anim finishes
      setTimeout(() => {
        el.removeClass('navSidebar-on');
      }, C.SIDEBAR_TRANS_TIME);

      bg.removeClass('overlay-on');
    } else {
      el.addClass('navSidebar-on');
      bg.addClass('overlay-on');
    }
    this.setState(prevState => {
      return {
        sidebarIsOpen: !prevState.sidebarIsOpen
      };
    });

    setTimeout(() => {
      this.setState({
        sidebarReady: true
      });
    }, C.SIDEBAR_TRANS_TIME);
  }
  render() {
    const { height, size, links } = this.props;
    const { sidebarIsOpen } = this.state;

    if (size === 'large') {
      return (
        <div className="nav-wrapper">
          <div id="navbar">
            <div>
              <Title />
            </div>
            <div>{links}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-wrapper">
          <div id="navbar">
            <div>
              <Title />
            </div>
          </div>
          <div id="navSidebar" className="navSidebar-off">
            <Sidebar
              height={height}
              links={links}
              sidebarOpen={sidebarIsOpen}
              sidebarClick={this.checkSidebarState}
            />
          </div>
          <div id="menuIcon">
            <MenuIcon
              sidebarIsOpen={sidebarIsOpen}
              menuIconClick={this.checkSidebarState}
            />
          </div>
          <div id="overlay" className="overlay-off">
            <Overlay height={height} />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
