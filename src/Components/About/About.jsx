//Libraries
import React, { Component } from 'react';

//Assets
import profilePic from '../../assets/profile.jpg';
import msftLogo from '../../assets/msftLogo_2096_771.png';
import msftStudiosLogo from '../../assets/msftStudios_2000_570.png';
import eaLogo from '../../assets/eaLogo_1280_505.png';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height }.
 * @return {JSX.Element} - Rendered component.
 */
class About extends Component {
  render(props) {
    let { height } = this.props;
    return (
      <div style={{ height: height }} className="section-wrapper about-wrapper">
        <div id="profilePicWrapper" className="about-content-block">
          <img id="profilePic" src={profilePic} alt="profile pic" />
        </div>
        <div id="aboutTextWrapper" className="about-content-block">
          <p className="about-text">Welcome and thanks for visiting.</p>
          <p className="about-text">
            I'm a Developer | Designer | Producer with 15+ years of experience
            at leading Fortune 500 companies, including Microsoft and Electronic
            Arts. With a background in both creative and business oriented
            product development, I understand the importance and value of the
            user experience.
          </p>
          <p className="about-text">
            My goal is always to build robust, beautiful, responsive user
            experiences on mobile and the web. I'm an advocate of functional
            programming, modular Javascript + React - clean and reusable code -
            and seek to leverage modern API's, libraries, methodologies and
            tools where effective and efficient.
          </p>
        </div>
        <div id="logosWrapper" className="about-content-block">
          <img id="msftLogo" className="about-logo" src={msftLogo} alt="logo" />
          <img
            id="msftStudiosLogo"
            className="about-logo"
            src={msftStudiosLogo}
            alt="logo"
          />
          <img id="eaLogo" className="about-logo" src={eaLogo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default About;
