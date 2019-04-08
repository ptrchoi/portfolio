import React from 'react';
import { CSSTransition } from 'react-transition-group';

import C from '../../constants';
import Overlay from '../Overlay/Overlay';

/**
 * Functional React component, renders a sidebar with links and an overlay.
 * @function {object} props - { links } links component, { sidebarClick } callback for click event.
 * @return {JSX.Element} - Rendered sidebar and overlay.
 */
const Sidebar = props => {
  return (
    <div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={C.TRANSITION_TIME}
        classNames="fade"
      >
        <div className="sidebar-wrapper" onClick={props.sidebarClick}>
          <Overlay />
          <div className="sidebar">{props.links}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Sidebar;
