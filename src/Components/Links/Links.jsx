import React from 'react';

/**
 * Functional React component for navigation link routing with scroll-to feature.
 * @function
 * @param {object} props - { size } for responsive layouts.
 * @return {JSX.Element} - Rendered component of nav links, highlighted active link, dynamic layout/styling based .size param.
 */
const Links = props => {
  const classList = 'links-wrapper links-wrapper--' + props.size; //props.size -> large || small

  return (
    <ul className={classList}>
      <li id="home-link" data-menuanchor="anchor-1" className="menu-link">
        <a href="#anchor-1">home</a>
      </li>
      <li id="about-link" data-menuanchor="anchor-2" className="menu-link">
        <a href="#anchor-2">about</a>
      </li>
      <li id="skills-link" data-menuanchor="anchor-3" className="menu-link">
        <a href="#anchor-3">skills</a>
      </li>
      <li id="portfolio-link" data-menuanchor="anchor-4" className="menu-link">
        <a href="#anchor-4">portfolio</a>
      </li>
      <li id="contact-link" data-menuanchor="anchor-5" className="menu-link">
        <a href="#anchor-5">contact</a>
      </li>
    </ul>
  );
};

export default Links;
