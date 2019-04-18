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
        <ul>
          <li>Javascript | ES6</li>
          <li>jQuery</li>
          <li>React</li>
          <li>CSS3 | SCSS</li>
          <li>HTML5</li>
          <li>Bootstrap | Foundation</li>
          <li>Node.js | NPM | Parcel</li>
        </ul>
      </div>
      <div className="skills-group">
        <p>PRODUCTION SKILLS</p>
        <ul>
          <li>Agile | Jira | Trello</li>
          <li>Git | Github</li>
          <li>TDD | BDD | Jest | Enzyme</li>
          <li>JSDoc | GHF Markdown</li>
        </ul>
      </div>
      <div className="skills-group">
        <p>SOFT SKILLS</p>
        <ul>
          <li>Leadership | Teamwork</li>
          <li>Creativity | Quality</li>
          <li>Problem-solver | Analytical</li>
          <li>Professional | Reliable</li>
          <li>Communication</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
