//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

//Assets
import profilePic from '../../assets/profile2.jpeg';
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
        <div className="section-header">
          <h1>About</h1>
        </div>
        <div className="about-grid">
          <div className="item-a item">
            <img className="grid-pic" src={profilePic} alt="profile pic" />
          </div>
          <div className="item-b item">
            <p className="grid-text">
              Front-End Developer with a passion for creating elegant, intuitive, and delightful user experiences and solutions.
            <br />
              <br />
              Over 15 years of entertainment and business software development
              experience at leading Fortune 500 companies, including Microsoft and
              Electronic Arts.
          </p>
          </div>
          <div className="item-c item">
            <img className="grid-logo" src={msftLogo} alt="logo" />
          </div>
          <div className="item-d item">
            <img className="grid-logo" src={msftStudiosLogo} alt="logo" />
          </div>
          <div className="item-e item">
            <img className="grid-logo" src={eaLogo} alt="logo" />
          </div>
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
