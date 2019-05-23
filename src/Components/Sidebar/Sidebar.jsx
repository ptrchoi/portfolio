//Libraries
import React from 'react';
import { CSSTransition } from 'react-transition-group';

//Components
import Overlay from '../overlay/Overlay';

//Constants
import C from '../../constants';

/**
 * Functional React component, renders sidebar containing menu components.
 * @function {object} props - { links }, { sidebarClick } callback for click event.
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
