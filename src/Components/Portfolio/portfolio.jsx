import React, { Component } from 'react';

/**
 * React Class Component, renders a page content element.
 * @function
 * @param {object} props
 * @return {JSX.Element} - Rendered component.
 */
class Portfolio extends Component {
  render(props) {
    let { height } = this.props;
    return (
      <div style={{ height: height }} className="portfolio-wrapper">
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
            <p>Calculator App</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={'https://codepen.io/ptrchoi/pen/Xyrppy/image/large.png'}
            className="project-image"
          />
          <div className="project-text">
            <p>Drum Machine App</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={'https://codepen.io/ptrchoi/pen/mQEMXv/image/large.png'}
            className="project-image"
          />
          <div className="project-text">
            <p>Random Quote Generator</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={'https://codepen.io/ptrchoi/pen/jvLoOQ/image/large.png'}
            className="project-image"
          />
          <div className="project-text">
            <p>Technical Documentation</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={'https://codepen.io/ptrchoi/pen/rqPKJV/image/large.png'}
            className="project-image"
          />
          <div className="project-text">
            <p>Markdown Live Previewer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
