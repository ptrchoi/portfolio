import React from 'react';

import Title from '../Title/Title';

const Navbar = props => {
  return (
    <div className="navbar-wrapper">
      <Title />
      <div>{props.links}</div>
    </div>
  );
};

export default Navbar;
