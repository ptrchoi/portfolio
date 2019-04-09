import React from 'react';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Portfolio = () => {
  return (
    <div id="portfolioWrapper" className="section-wrapper">
      <p>My Portfolio Component</p>
      {/* {
        <p
        className="codepen"
        dataheight="265"
        datathemeid="0"
        datadefaulttab="html,result"
        datauser="ptrchoi"
        dataslughash="jvLoOQ"
        style={{
          height: 265 + 'px',
          boxSizing: 'borderBox',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 2 + 'px solid black',
          margin: 1 + 'em 0',
          padding: 1 + 'em'
        }}
        datapentitle="FreeCodeCamp: Technical Document Demo | JAVASCRIPT (VANILLA)"
      >
        <span>
          See the Pen
          <a href="https://codepen.io/ptrchoi/pen/jvLoOQ/">
            FreeCodeCamp: Technical Document Demo | VANILLA JAVASCRIPT
          </a>
          by Peter Choi
          <a href="https://codepen.io/ptrchoi">@ptrchoi</a>
          on
          <a href="https://codepen.io">CodePen</a>
          .
        </span>
      </p>
      <script async src="https://static.codepen.io/assets/embed/ei.js"></script>     
    } */}

      <iframe
        height="600"
        style={{ width: 40 + '%' }}
        scrolling="no"
        title="FreeCodeCamp: Technical Document Demo | JAVASCRIPT (VANILLA)"
        src="//codepen.io/ptrchoi/embed/jvLoOQ/?height=265&theme-id=0&default-tab=html,result"
        frameBorder="no"
        allowtransparency="true"
        allowFullScreen="true"
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

export default Portfolio;
