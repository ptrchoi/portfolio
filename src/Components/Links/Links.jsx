import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

/**
 * Functional React component for navigation link routing with scroll-to feature.
 * @function
 * @param {object} props - { size } for responsive layouts.
 * @return {JSX.Element} - Rendered component of nav links, highlighted active link, dynamic layout/styling based .size param.
 */
const Links = props => {
  //App.jsx sets props.activeLink based on current scrollTop position
  const testActive = to => () => to === props.activeLink;

  const classList = 'links-wrapper links-wrapper--' + props.size; //props.size -> large || small
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
      <NavLink
        id="menu-portfolio"
        className="menuLink"
        to="/#portfolio"
        isActive={testActive('#portfolio')}
        exact
        activeClassName={'activeLink'}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        Portfolio
      </NavLink>
      <NavLink
        id="menu-contact"
        className="menuLink"
        to="/#contact"
        isActive={testActive('#contact')}
        exact
        activeClassName={'activeLink'}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Links;
