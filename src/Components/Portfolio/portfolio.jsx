import React from 'react';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Portfolio = () => {
  return (
    <div id="portfolioWrapper" className="section-wrapper">
      <div className="project-card">
        <img
          src={'https://codepen.io/ptrchoi/pen/JayyOP/image/large.png'}
          className="project-image"
        />
        <div className="project-text">
          <p>Product Landing Page</p>
        </div>
      </div>
      <div className="project-card">
        <img
          src={'https://codepen.io/ptrchoi/pen/QJRpvQ/image/large.png'}
          className="project-image"
        />
        <div className="project-text">
          <p>Product Landing Page</p>
        </div>
      </div>
      <div className="project-card">
        <img
          src={'https://codepen.io/ptrchoi/pen/Xyrppy/image/large.png'}
          className="project-image"
        />
        <div className="project-text">
          <p>Product Landing Page</p>
        </div>
      </div>
      <div className="project-card">
        <img
          src={'https://codepen.io/ptrchoi/pen/mQEMXv/image/large.png'}
          className="project-image"
        />
        <div className="project-text">
          <p>Product Landing Page</p>
        </div>
      </div>
      <div className="project-card">
        <img
          src={'https://codepen.io/ptrchoi/pen/jvLoOQ/image/large.png'}
          className="project-image"
        />
        <div className="project-text">
          <p>Product Landing Page</p>
        </div>
      </div>
      <div className="project-card">
        <img
          src={'https://codepen.io/ptrchoi/pen/rqPKJV/image/large.png'}
          className="project-image"
        />
        <div className="project-text">
          <p>Product Landing Page</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
