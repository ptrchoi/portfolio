import React from 'react';

import chart from '../../assets/skills_chart_v2.png';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Skills = () => {
  return (
    <div className="section-wrapper skills-wrapper">
      <div className="skills-group-wrapper">
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
      <div>
        <img id="chart" src={chart} />
      </div>
    </div>
  );
};

export default Skills;
