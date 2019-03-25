import React, { Component } from 'react';
import $ from 'jquery';

import Title from '../Title/Title';
import Sidebar from '../Sidebar/Sidebar';
import MenuIcon from '../MenuIcon/MenuIcon';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.matchParentWidth = this.matchParentWidth.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.matchParentWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.matchParentWidth);
  }
  matchParentWidth() {
    let parentWidth = $('.parent').width();
    $('.child').width(parentWidth);
  }
  render() {
    const { mq } = this.props;
    console.log('mq: ', mq);

    const toggleSidebarHandler = () => {
      console.log('toggleSidebarHandler');
      $('#navSidebar').toggleClass('navSidebar--hide');
    };

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
          <Title />
          <MenuIcon toggleSidebar={toggleSidebarHandler} />
          <div id="navSidebar" className="navSidebar--hide">
            <Sidebar links={this.props.links} />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
