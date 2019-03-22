import React from 'react';
import $ from 'jquery';

const MenuIcon = props => {
  const toggleIcon = () => {
    console.log('menuicon clicked');
    $('#icon-wrapper').toggleClass('icon--close');
    props.toggleSidebar();
  };
  return (
    <div id="icon-wrapper" className="icon--open" onClick={toggleIcon}>
      <div className="icon--bar1" />
      <div className="icon--bar2" />
      <div className="icon--bar3" />
    </div>
  );
};

export default MenuIcon;
