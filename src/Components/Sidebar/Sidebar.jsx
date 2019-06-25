//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Functional React component, renders sidebar containing menu components.
 * @function {object} props - { links }, { sidebarClick } callback for click event.
 * @return {JSX.Element} - Rendered sidebar.
 */
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.props.sidebarClick()) {
      $('#sidebarWrapper').removeClass('sidebar-wrapper--open');
    }
  }
  render() {
    const { height, links, sidebarOpen } = this.props;
    let classList = 'sidebar-wrapper';

    if (sidebarOpen) {
      classList += ' sidebar-wrapper--open';
    }

    return (
      <div
        id="sidebarWrapper"
        className={classList}
        style={{ height: height }}
        onClick={this.handleClick}
      >
        <div />
        <div className="sidebar">{links}</div>
      </div>
    );
  }
}

export default Sidebar;
