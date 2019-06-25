//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

/**
 * React Class Component, renders hamburger icon.
 * @function
 * @param {object} props -  { sidebarIsOpen }, { menuIconClick } callback on icon click event.
 * @return {JSX.Element} - Rendered icon.
 */
class MenuIcon extends Component {
  constructor(props) {
    super(props);

    this.toggleIcon = this.toggleIcon.bind(this);
  }
  toggleIcon() {
    if (this.props.menuIconClick()) {
      $('.menu-icon').toggleClass('menu-icon--close');
    }
  }
  render() {
    //If sidebar has closed, then remove .icon--close class if still attached
    if (!this.props.sidebarIsOpen && $('.menu-icon--close')[0]) {
      $('.menu-icon').toggleClass('menu-icon--close');
    }
    return (
      <div className="menu-icon" onClick={this.toggleIcon}>
        <div className="menu-icon--bar1" />
        <div className="menu-icon--bar2" />
        <div className="menu-icon--bar3" />
      </div>
    );
  }
}

export default MenuIcon;
