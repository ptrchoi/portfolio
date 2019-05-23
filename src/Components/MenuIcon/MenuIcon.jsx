//Libraries
import React from 'react';
import $ from 'jquery';

/**
 * React Class Component, renders hamburger icon.
 * @function
 * @param {object} props -  { sidebarIsOpen }, { menuIconClick } callback on icon click event.
 * @return {JSX.Element} - Rendered icon.
 */
const MenuIcon = props => {
  const toggleIcon = () => {
    $('.menu-icon').toggleClass('menu-icon--close');
    props.menuIconClick();
  };
  //If sidebar has closed, then remove .icon--close if still attached
  if (!props.sidebarIsOpen && $('.menu-icon--close')[0]) {
    $('.menu-icon').toggleClass('menu-icon--close');
  }
  return (
    <div className="menu-icon" onClick={toggleIcon}>
      <div className="menu-icon--bar1" />
      <div className="menu-icon--bar2" />
      <div className="menu-icon--bar3" />
    </div>
  );
};

export default MenuIcon;
