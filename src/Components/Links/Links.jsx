import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

/**
 * Functional React component for navigation link routing with scroll-to feature.
 * @function
 * @param {object} props - { size } 'wide' || 'narrow' layouts.
 * @return {JSX.Element} - Rendered component of nav links, highlighted active link, dynamic layout/styling based .size param.
 */
const Links = props => {
  const testActive = to => (match, location) => to === location.hash;
  const classList = 'links-wrapper links-wrapper--' + props.size; //props.size -> wide || narrow
  return (
    <div className={classList}>
      <NavLink
        id="menu-home"
        className="menuLink"
        to="/#home"
        isActive={testActive('#home')}
        exact
        activeClassName={'activeLink'}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        Home
      </NavLink>
      <NavLink
        id="menu-about"
        className="menuLink"
        to="/#about"
        isActive={testActive('#about')}
        exact
        activeClassName={'activeLink'}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        About
      </NavLink>
      <NavLink
        id="menu-skills"
        className="menuLink"
        to="/#skills"
        isActive={testActive('#skills')}
        exact
        activeClassName={'activeLink'}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        Skills
      </NavLink>
    </div>
  );
};

export default Links;
