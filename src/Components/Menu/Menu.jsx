import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Menu = props => {
  const testActive = to => (match, location) => to === location.hash;

  return (
    <div id="nav">
      <ul className="menu">
        <li>
          <NavLink
            to="/#home"
            isActive={testActive('#home')}
            exact
            activeClassName={'activeLink'}
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
            activeClassName={'activeLink'}
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
            activeClassName={'activeLink'}
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
