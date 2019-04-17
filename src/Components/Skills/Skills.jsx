import React from 'react';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Skills = () => {
  return (
    <div className="section-wrapper skills-wrapper">
      <div className="skills-group">
        <p>TECHNICAL SKILLS</p>
      </div>
      <div className="skills-group">
        <p>PRODUCTION SKILLS</p>
      </div>
      <div className="skills-group">
        <p>SOFT SKILLS</p>
      </div>
    </div>
  );
};

export default Skills;
