import React, { Component } from 'react';
import $ from 'jquery';

import Title from '../Title/Title';
import Sidebar from '../Sidebar/Sidebar';
import MenuIcon from '../MenuIcon/MenuIcon';

/**
 * Class component, renders responsive menu components based on mediaQuery.
 * @param {object} props - { mq } mediaQuery size from parent/App.
 * @return {JSX.Element} - Rendered component, with wide format navbar OR narrow with icon & sidebar.
 */
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
    //Initialize width to match parent container, then listen for resize events
    this.matchParentWidth();
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
  }
  render() {
    const { mq } = this.props;
    const { sidebarIsOpen } = this.state;
    let sidebar; //default to null

    if (sidebarIsOpen) {
      sidebar = (
        <Sidebar links={this.props.links} sidebarClick={this.toggleSidebar} />
      );
    }

    // Check mediaquery prop for wide or narrow layout
    if (mq === 'wide') {
      return (
        <div className="navbar-wrapper">
          <Title />
          <div>{this.props.links}</div>
        </div>
      );
    } else {
      return (
        <div className="navbar-wrapper">
          <div>
            <Title />
          </div>
          <div id="navSidebar">{sidebar}</div>
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
