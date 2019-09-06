//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height }.
 * @return {JSX.Element} - Rendered component.
 */
class Contact extends Component {
  render(props) {
    let { size, height } = this.props;
    return (
      <div
        style={{ height: height }}
        className="section-wrapper contact-wrapper"
      >
        <div className="section-header">
          <h1>Contact</h1>
        </div>
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
        <div className="confetti">
          <Confetti
            data={{
              confettiType: 'icon',
              strArr: [
                { text: 'far fa-comment' },
                { text: 'far fa-envelope' },
                { text: 'fas fa-mobile-alt' }
              ],
              screen: size,
              num: 50,
              color: 'darkBG',
              speed: 'medium'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
