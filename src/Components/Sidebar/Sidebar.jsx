//Libraries
import React from 'react';
// import { CSSTransition } from 'react-transition-group';

//Components
import Overlay from '../overlay/Overlay';

/**
 * Functional React component, renders sidebar containing menu components.
 * @function {object} props - { links }, { sidebarClick } callback for click event.
 * @return {JSX.Element} - Rendered sidebar and overlay.
 */
const Sidebar = props => {
  let { height } = props;

  return (
    <div>
      <div
        style={{ height: height }}
        className="sidebar-wrapper"
        onClick={props.sidebarClick}
      >
        <Overlay />
        <div className="sidebar">{props.links}</div>
      </div>
    </div>
  );
};

export default Sidebar;
