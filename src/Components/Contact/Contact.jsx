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
    let { height } = this.props;
    return (
      <div
        style={{ height: height }}
        className="section-wrapper contact-wrapper"
      >
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
              confetti: 'icon',
              strArr: [
                { text: 'fab fa-codepen' },
                { text: 'fab fa-github' },
                { text: 'fab fa-linkedin' },
                { text: 'fab fa-free-code-camp' }
              ],
              num: 15,
              color: 'darkBG'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
