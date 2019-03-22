import React from 'react';
import $ from 'jquery';

import Title from '../Title/Title';
import Sidebar from '../Sidebar/Sidebar';
import MenuIcon from '../MenuIcon/MenuIcon';

const Navbar = props => {
  const { mq } = props;
  console.log('mq: ', mq);

  const toggleSidebarHandler = () => {
    console.log('toggleSidebarHandler');
    // $('#icon-wrapper').toggleClass('sidebar-icon--close');
    $('#navSidebar').toggleClass('navSidebar--show');
  };

  if (mq === 'wide') {
    return (
      <div className="navbar-wrapper navbar-wrapper--wide">
        <Title />
        <div>{props.links}</div>
      </div>
    );
  } else {
    return (
      <div className="navbar-wrapper navbar-wrapper--narrow">
        <Title />
        <MenuIcon toggleSidebar={toggleSidebarHandler} />
        <div id="navSidebar" className="navSidebar--hide">
          <Sidebar links={props.links} />
        </div>
      </div>
    );
  }
};

export default Navbar;
