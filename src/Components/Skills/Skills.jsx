//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

//Assets
import chart from '../../assets/skills_chart_v6.png';

/**
 * React Class Component, renders a responsive content section.
 * @function
 * @param {object} props { size, height }
 * @return {JSX.Element} - Rendered component.
 */
class Skills extends Component {
  render(props) {
    let { size, height } = this.props;
    let responsiveHeight = height;

    const classList = 'skills-group-wrapper skills-group-wrapper--' + size;
    if (size === 'small') {
      responsiveHeight = 'auto';
    }

    return (
      <div
        style={{ height: responsiveHeight }}
        className="section-wrapper skills-wrapper"
      >
        <div className={classList}>
          <div className="skills-group">
            <i className="fas fa-cubes fa-icon" />
            <h3>Skilled Developer</h3>
            <p className="skills-text">
              Modular, functional programming oriented developer. Certified in
              several languages and libraries with numerous modern web apps
              developed leveraging React, Responsive Design, Unit Testing
            </p>
          </div>
          <div className="skills-group">
            <i className="far fa-compass fa-icon" />
            <h3>User-centered Thinker</h3>
            <p className="skills-text">
              Experienced UX and Design professional, well-versed on modern
              trends and strategies. Constantly focused on the user's journey
              and end user experience.
            </p>
          </div>
          <div className="skills-group">
            <i className="fas fa-people-carry fa-icon" />
            <h3>Team Player</h3>
            <p className="skills-text">
              Deep background in software production and management, expert with
              agile methodologies and proven soft skills working with large
              distributed teams across diverse disciplines, time zones, and
              cultures.
            </p>
          </div>
        </div>
        <div className="skills-graphic">
          <img id="chart" src={chart} alt="chart" />
        </div>
        <div className="confetti">
          <Confetti
            data={{
              confettiType: 'icon',
              strArr: [
                { text: 'fab fa-react' },
                { text: 'fab fa-js-square' },
                { text: 'fab fa-sass' },
                { text: 'fab fa-html5' }
              ],
              screen: size,
              num: 80,
              color: 'background',
              speed: 'slow'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Skills;
