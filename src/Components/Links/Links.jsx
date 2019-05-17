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
      <li data-menuanchor="anchor-1" className="active">
        <a href="#anchor-1">home</a>
      </li>
      <li data-menuanchor="anchor-2">
        <a href="#anchor-2">about</a>
      </li>
      <li data-menuanchor="anchor-3">
        <a href="#anchor-3">skills</a>
      </li>
      <li data-menuanchor="anchor-4">
        <a href="#anchor-4">portfolio</a>
      </li>
      <li data-menuanchor="anchor-5">
        <a href="#anchor-5">contact</a>
      </li>
    </ul>
  );
};

export default Links;
