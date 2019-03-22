import React from 'react';
import $ from 'jquery';

const Sidebar = props => {
  const toggleIcon = () => {
    console.log('sidebar clicked');
    $('#icon-wrapper').toggleClass('sidebar-icon--close');
    $('#sidebar').toggleClass('sidebar--open');
    props.toggleLinks();
  };
  return (
    <div>
      <div
        id="icon-wrapper"
        className="sidebar-icon--open"
        onClick={toggleIcon}
      >
        <div className="sidebar-icon--bar1" />
        <div className="sidebar-icon--bar2" />
        <div className="sidebar-icon--bar3" />
      </div>
      <div id="sidebar" className="sidebar--closed" />
    </div>
  );
};

export default Sidebar;
