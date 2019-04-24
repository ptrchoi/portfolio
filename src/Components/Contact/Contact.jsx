import React from 'react';

/**
 * Functional React component, simply renders a page content element
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Contact = () => {
  return (
    <div className="section-wrapper contact-wrapper">
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
};

export default Contact;
