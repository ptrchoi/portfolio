import React from 'react';

//Components
// import Title from '../Title/Title';
// import Links from '../Links/Links';

const Navbar = props => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-item">{props.title}</div>
      <div className="navbar-item">{props.links}</div>
    </div>
  );
};

export default Navbar;
