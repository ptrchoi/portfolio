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
    this.showSidebarHandler = this.showSidebarHandler.bind(this);
    this.hideSidebarHandler = this.hideSidebarHandler.bind(this);
    this.sidebarClickHandler = this.sidebarClickHandler.bind(this);
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
    this.state.sidebarIsOpen
      ? this.hideSidebarHandler()
      : this.showSidebarHandler();
  }
  showSidebarHandler() {
    this.setState({
      sidebarIsOpen: true
    });
    $('#navSidebar').removeClass('navSidebar--hide');
  }
  hideSidebarHandler() {
    this.setState({
      sidebarIsOpen: false
    });
    $('#navSidebar').addClass('navSidebar--hide');
  }
  sidebarClickHandler() {
    this.hideSidebarHandler();
    //need to toggle menuIcon
  }
  render() {
    const { sidebarIsOpen } = this.state;
    const { mq } = this.props;
    // console.log('mq: ', mq);

    if (mq === 'wide') {
      if (sidebarIsOpen) {
        this.hideSidebarHandler();
      }
      return (
        <div className="navbar-wrapper">
          <Title />
          <div>{this.props.links}</div>
        </div>
      );
    } else {
      return (
        <div className="navbar-wrapper">
          <Title />
          <MenuIcon toggleSidebar={this.toggleSidebarHandler} />
          <div id="navSidebar" className="navSidebar--hide">
            <Sidebar
              sidebarClick={this.sidebarClickHandler}
              links={this.props.links}
            />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
