//Libraries
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import $ from 'jquery';

//Components
import C from '../../constants';
import Title from '../title/Title';
import Sidebar from '../sidebar/Sidebar';
import MenuIcon from '../menuIcon/MenuIcon';

/**
 * Class component, renders responsive menu components, matching parent element's width upon resize(), toggles and passes down sidebar status.
 * @param {object} props - { size } .
 * @return {JSX.Element} - Rendered component, with large format navbar OR small with icon & sidebar.
 */
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarIsOpen: false
    };

    this.matchParentWidth = this.matchParentWidth.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  componentDidMount() {
    //Initialize width to match parent container, then listen for resize events
    this.matchParentWidth();
    window.addEventListener('resize', this.matchParentWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.matchParentWidth);
  }
  matchParentWidth() {
    let parentWidth = $('.navbar-wrapper')
      .parent()
      .width();
    $('.navbar-wrapper').width(parentWidth);
  }
  toggleSidebar() {
    this.setState(prevState => {
      return {
        sidebarIsOpen: !prevState.sidebarIsOpen
      };
    });
  }
  render() {
    const { size } = this.props;
    const { sidebarIsOpen } = this.state;
    let sidebar;

    if (sidebarIsOpen) {
      sidebar = (
        <Sidebar links={this.props.links} sidebarClick={this.toggleSidebar} />
      );
    }

    if (size === 'large') {
      return (
        <div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={C.TRANSITION_TIME}
            classNames="fade"
          >
            <div className="navbar-wrapper">
              <Title />
              <div>{this.props.links}</div>
            </div>
          </CSSTransition>
        </div>
      );
    } else {
      return (
        <div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={C.TRANSITION_TIME}
            classNames="fade"
          >
            <div className="navbar-wrapper">
              <div>
                <Title />
              </div>
              <div id="navSidebar">{sidebar}</div>
              <div id="menuIcon">
                <MenuIcon
                  sidebarIsOpen={sidebarIsOpen}
                  menuIconClick={this.toggleSidebar}
                />
              </div>
            </div>
          </CSSTransition>
        </div>
      );
    }
  }
}

export default Navbar;
