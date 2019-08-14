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
            <h2>Modular Code</h2>
            <p className="skills-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              impedit similique aut iste amet perspiciatis, dolorem nesciunt
              quisquam, distinctio necessitatibus eius molestiae repellendus id
              quasi nobis o
            </p>
          </div>
          <div className="skills-group">
            <i className="far fa-check-circle fa-icon" />
            <h2>Experienced | Quality</h2>
            <p className="skills-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              impedit similique aut iste amet perspiciatis, dolorem nesciunt
              quisquam, distinctio necessitatibus eius molestiae repellendus id
              quasi nobi!
            </p>
          </div>
          <div className="skills-group">
            <i className="fas fa-user-cog fa-icon" />
            <h2>User-centered</h2>
            <p className="skills-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              impedit similique aut iste amet perspiciatis, dolorem nesciunt
              quisquam, distinctio necessitatibus eius molestiae repellendus id
              quasi nobis odit sit iusto optio
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

export default Skills;
