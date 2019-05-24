//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

//Components
import Overlay from '../overlay/Overlay';

/**
 * Functional React component, renders sidebar containing menu components.
 * @function {object} props - { links }, { sidebarClick } callback for click event.
 * @return {JSX.Element} - Rendered sidebar and overlay.
 */
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    $('#sidebarWrapper').removeClass('sidebar-wrapper--open');
    this.props.sidebarClick();
  }
  render() {
    const { height, links, sidebarOpen } = this.props;
    let classList = 'sidebar-wrapper';
    if (sidebarOpen) {
      classList += ' sidebar-wrapper--open';
    }

    return (
      <div>
        <div
          id="sidebarWrapper"
          className={classList}
          style={{ height: height }}
          onClick={this.handleClick}
        >
          <Overlay />
          <div className="sidebar">{links}</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
