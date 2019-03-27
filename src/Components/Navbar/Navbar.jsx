import React, { Component } from 'react';
import $ from 'jquery';

import Title from '../Title/Title';
import Sidebar from '../Sidebar/Sidebar';
import MenuIcon from '../MenuIcon/MenuIcon';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarIsOpen: false
    };

    this.matchParentWidth = this.matchParentWidth.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  componentDidMount() {
    this.matchParentWidth(); //Initialize width to match parent, then listen for resize events
    window.addEventListener('resize', this.matchParentWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.matchParentWidth);
  }
  matchParentWidth() {
    let parentWidth = $('.navbar-wrapper')
      .parent()
      .width();
    $('.navbar-wrapper').width(parentWidth);
  }
  toggleSidebar() {
    this.setState(prevState => {
      return {
        sidebarIsOpen: !prevState.sidebarIsOpen
      };
    });
    $('#navSidebar').toggleClass('navSidebar--close');
  }
  render() {
    const { sidebarIsOpen } = this.state;
    const { mq } = this.props;
    // console.log('mq: ', mq);

    if (mq === 'wide') {
      return (
        <div className="navbar-wrapper navbar-wrapper--wide">
          <Title />
          <div>{this.props.links}</div>
        </div>
      );
    } else {
      return (
        <div className="navbar-wrapper navbar-wrapper--narrow">
          <div>
            <Title />
          </div>
          <div id="navSidebar" className="navSidebar--close">
            <Sidebar
              links={this.props.links}
              sidebarClick={this.toggleSidebar}
            />
          </div>
          <div id="menuIcon">
            <MenuIcon
              sidebarIsOpen={sidebarIsOpen}
              menuIconClick={this.toggleSidebar}
            />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
