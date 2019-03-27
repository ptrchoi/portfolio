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
    this.toggleSidebarHandler = this.toggleSidebarHandler.bind(this);
    this.sidebarClickHandler = this.sidebarClickHandler.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
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
  toggleSidebarHandler() {
    this.state.sidebarIsOpen ? this.closeSidebar() : this.openSidebar();
  }
  sidebarClickHandler() {
    this.closeSidebar();
  }
  openSidebar() {
    if (!this.state.sidebarIsOpen) {
      this.setState({
        sidebarIsOpen: true
      });
      $('#navSidebar').removeClass('navSidebar--close');
      //set small delay to start listening for click event to avoid immediate click event on menu icon
      // setTimeout(() => {
      //   window.addEventListener('click', this.closeSidebar);
      // }, 500);
    }
  }
  closeSidebar() {
    if (this.state.sidebarIsOpen) {
      this.setState({
        sidebarIsOpen: false
      });
      $('#navSidebar').addClass('navSidebar--close');
      // window.removeEventListener('click', this.closeSidebar);
    }
  }
  render() {
    const { sidebarIsOpen } = this.state;
    const { mq } = this.props;
    // console.log('mq: ', mq);

    if (mq === 'wide') {
      if (sidebarIsOpen) {
        this.closeSidebar();
      }
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
              sidebarClick={this.sidebarClickHandler}
            />
          </div>
          <div id="menuIcon">
            <MenuIcon
              sidebarIsOpen={sidebarIsOpen}
              toggleSidebar={this.toggleSidebarHandler}
            />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
