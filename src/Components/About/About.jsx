import React from 'react';

import profilePic from '../../assets/profile.jpg';
import msftLogo from '../../assets/msftLogo_2096_771.png';
import msftStudiosLogo from '../../assets/msftStudios_2000_570.png';
import eaLogo from '../../assets/eaLogo_1280_505.png';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const About = () => {
  return (
    <div id="aboutWrapper" className="section-wrapper">
      <div id="logosWrapper">
        <img id="msftLogo" className="logo" src={msftLogo} />
        <img id="msftStudiosLogo" className="logo" src={msftStudiosLogo} />
        <img id="eaLogo" className="logo" src={eaLogo} />
      </div>
      <div>
        <img id="profilePic" src={profilePic} />
      </div>
    </div>
  );
};

export default About;
