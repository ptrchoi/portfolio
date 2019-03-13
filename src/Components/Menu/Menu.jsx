import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Menu = props => {
  const selectedStyle = {
    fontSize: '2rem'
  };
  const testActive = to => (match, location) => to === location.hash;

  return (
    <div id="nav">
      <ul className="menu">
        <li>
          <NavLink
            to="/#home"
            isActive={testActive('#home')}
            exact
            activeStyle={selectedStyle}
            // onClick={props.onNavLinkClick(testActive)}
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#about"
            isActive={testActive('#about')}
            exact
            activeStyle={selectedStyle}
            // onClick={props.onNavLinkClick(testActive)}
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#skills"
            isActive={testActive('#skills')}
            exact
            activeStyle={selectedStyle}
            // onClick={props.onNavLinkClick(testActive)}
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            Skills
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
