//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Functional React Component, renders a content section of "cards".
 * @function
 * @return {JSX.Element} - Rendered component.
 */
class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <div className="section-wrapper portfolio-wrapper">
        {/* Product Landing Page Card */}
        <div className="card">
          <div
            id="project-1"
            className={
              this.state.active ? 'card-content card-flipped' : 'card-content'
            }
            onClick={this.toggleClass}
          >
            <div className="card-content--front">
              <img
                src={'https://codepen.io/ptrchoi/pen/JayyOP/image/large.png'}
                alt="thumbnail"
              />
              <div>
                <p>Product Landing Page</p>
              </div>
            </div>
            <div className="card-content--back">
              <a href="https://codepen.io/ptrchoi/pen/JayyOP" target="_blank">
                <p>BACK of the card text</p>
              </a>
            </div>
          </div>
        </div>

        {/* Product Landing Page Card */}
        <div className="card">
          <div
            id="project-2"
            className={
              this.state.active ? 'card-content card-flipped' : 'card-content'
            }
            onClick={this.toggleClass}
          >
            <div className="card-content--front">
              <img
                src={'https://codepen.io/ptrchoi/pen/QJRpvQ/image/large.png'}
                alt="thumbnail"
              />
              <div>
                <p>Calculator App</p>
              </div>
            </div>
            <div className="card-content--back">
              <a href="https://codepen.io/ptrchoi/pen/JayyOP" target="_blank">
                <p>BACK of the card text</p>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src={'https://codepen.io/ptrchoi/pen/Xyrppy/image/large.png'}
            className="front-image"
            alt="thumbnail"
          />
          <div className="front-title">
            <p>Drum Machine App</p>
          </div>
        </div>
        <div className="card">
          <img
            src={'https://codepen.io/ptrchoi/pen/mQEMXv/image/large.png'}
            className="front-image"
            alt="thumbnail"
          />
          <div className="front-title">
            <p>Random Quote Generator</p>
          </div>
        </div>
        <div className="card">
          <img
            src={'https://codepen.io/ptrchoi/pen/jvLoOQ/image/large.png'}
            className="front-image"
            alt="thumbnail"
          />
          <div className="front-title">
            <p>Technical Documentation</p>
          </div>
        </div>
        <div className="card">
          <img
            src={'https://codepen.io/ptrchoi/pen/rqPKJV/image/large.png'}
            className="front-image"
            alt="thumbnail"
          />
          <div className="front-title">
            <p>Markdown Live Previewer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
