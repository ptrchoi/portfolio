import React from 'react';

import Overlay from '../Overlay/Overlay';

/**
 * Functional React component, renders a sidebar with links and an overlay.
 * @function {object} props - { links } links component, { sidebarClick } callback for click event.
 * @return {JSX.Element} - Rendered sidebar and overlay.
 */
const Sidebar = props => {
  return (
    <div className="sidebar-wrapper" onClick={props.sidebarClick}>
      <Overlay />
      <div className="sidebar">{props.links}</div>
    </div>
  );
};

export default Sidebar;
