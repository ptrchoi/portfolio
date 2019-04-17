import React from 'react';

import githubLogo from '../../assets/github_logo.png';
import codepenLogo from '../../assets/codepen_logo.png';
import linkedinLogo from '../../assets/linkedin_logo.png';
import fccLogo from '../../assets/freecodecamp_logo.png';

/**
 * Functional React component, simply renders a page content element
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Contact = () => {
  return (
    <div className="section-wrapper contact-wrapper">
      <div className="contact-item">
        <span>CONTACT</span>
        <input type="text" />
        <button>SUBMIT</button>
      </div>
      <div className="contact-item">
        <img id="githubLogo" src={githubLogo} className="logo-icon" alt="" />
        <img id="codepenLogo" src={codepenLogo} className="logo-icon" alt="" />
        <img
          id="linkedinLogo"
          src={linkedinLogo}
          className="logo-icon"
          alt=""
        />
        <img id="fccLogo" src={fccLogo} className="logo-icon" alt="" />
      </div>
    </div>
  );
};

export default Contact;
