import React from 'react';
import $ from 'jquery';

/**
 * Functional React component, renders menu icon.
 * @function
 * @param {object} props -  { sidebarIsOpen } to test sidebar state, { menuIconClick } callback on icon click event.
 * @return {JSX.Element} - Rendered icon.
 */
const MenuIcon = props => {
  const toggleIcon = () => {
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
