//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

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
    let { size, height } = this.props;
    return (
      <div style={{ height: height }} className="section-wrapper about-wrapper">
        <div id="profilePicWrapper" className="about-content-block">
          <img id="profilePic" src={profilePic} alt="profile pic" />
        </div>
        <div id="aboutTextWrapper" className="about-content-block">
          <p className="about-text">Welcome and thanks for visiting.</p>
          <p className="about-text">
            I'm a Developer, Designer, and Producer with over 15 years of
            experience at leading Fortune 500 companies, including Microsoft and
            Electronic Arts. With a professional background in both
            entertainment and business software development and management, I
            understand the importance and value of an engaging end-user
            experience, robust implementation, and reliable execution.
          </p>
          <p className="about-text">
            I enjoy innovating and collaborating to create elegant, efficient,
            and delightful mobile and web applications. You can find some
            examples in my <a href="#anchor-4">portfolio</a> and please feel
            free to <a href="#anchor-5">reach out</a> if you have a project
            you'd like to discuss.
          </p>
          <p className="about-text">- Peter</p>
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
        <div className="confetti">
          <Confetti
            data={{
              confettiType: 'icon',
              strArr: [
                { text: 'fas fa-address-card' },
                { text: 'fab fa-microsoft' },
                { text: 'fab fa-xbox' }
              ],
              screen: size,
              num: 40,
              color: 'background',
              speed: 'slow'
            }}
          />
        </div>
        <div className="confetti">
          <Confetti
            data={{
              confettiType: 'text',
              strArr: [{ text: 'EA' }, { text: 'Xbox' }],
              screen: size,
              num: 40,
              color: 'background',
              speed: 'slow'
            }}
          />
        </div>
      </div>
    );
  }
}

export default About;
