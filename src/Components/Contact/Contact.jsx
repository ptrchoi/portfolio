//Libraries
import React, { Component } from 'react';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height }.
 * @return {JSX.Element} - Rendered component.
 */
class Contact extends Component {
  render(props) {
    let { height } = this.props;
    return (
      <div style={{ height: height }} className="contact-wrapper">
        <div id="contactSection">
          <i className="fab fa-codepen logo-icon" />
          <i className="fab fa-github logo-icon" />
          <i className="fab fa-free-code-camp logo-icon" />
          <i className="fab fa-linkedin logo-icon" />
        </div>
        <div id="contactForm">
          <span>CONTACT</span>
          <input type="text" />
          <button>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Contact;
