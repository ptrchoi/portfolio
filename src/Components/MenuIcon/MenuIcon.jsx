import React from 'react';
import $ from 'jquery';

const MenuIcon = props => {
  const toggleIcon = () => {
    // console.log('menuicon clicked');
    $('#icon-wrapper').toggleClass('icon--close');
    props.menuIconClick();
  };
  //If sidebar has closed, then remove .icon--close if still attached
  if (!props.sidebarIsOpen && $('.icon--close')[0]) {
    $('#icon-wrapper').toggleClass('icon--close');
  }
  return (
    <div id="icon-wrapper" className="icon" onClick={toggleIcon}>
      <div className="icon--bar1" />
      <div className="icon--bar2" />
      <div className="icon--bar3" />
    </div>
  );
};

export default MenuIcon;
