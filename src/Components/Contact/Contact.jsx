import React, { Component } from 'react';

/**
 * React Class Component, renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
class Contact extends Component {
  render(props) {
    let { height } = this.props;
    return (
      <div style={{ height: height }} className="contact-wrapper">
        <div className="contact-section">
          <i className="fab fa-codepen logo-icon" />
          <i className="fab fa-github logo-icon" />
          <i className="fab fa-free-code-camp logo-icon" />
          <i className="fab fa-linkedin logo-icon" />
        </div>
        <div className="contact-form">
          <span>CONTACT</span>
          <input type="text" />
          <button>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Contact;
