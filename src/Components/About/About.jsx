import React from 'react';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const About = () => {
  return (
    <div id="aboutWrapper" className="section-wrapper">
      <p>About Component</p>
      <iframe
        height="300"
        style={{ width: 30 + '%' }}
        scrolling="no"
        title="FreeCodeCamp: Technical Document Demo | JAVASCRIPT (VANILLA)"
        src="//codepen.io/ptrchoi/embed/jvLoOQ/?height=265&theme-id=0&default-tab=html,result"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
      >
        See the Pen{' '}
        <a href="https://codepen.io/ptrchoi/pen/jvLoOQ/">
          FreeCodeCamp: Technical Document Demo | JAVASCRIPT (VANILLA)
        </a>{' '}
        by Peter Choi (<a href="https://codepen.io/ptrchoi">@ptrchoi</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
};

export default About;
