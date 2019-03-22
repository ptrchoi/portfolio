import React from 'react';

import Overlay from '../Overlay/Overlay';

const Sidebar = props => {
  return (
    <div className="sidebar-wrapper">
      <Overlay />
      <div className="sidebar">{props.links}</div>
    </div>
  );
};

export default Sidebar;
