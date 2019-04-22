import React from 'react';

import jsLogo from '../../assets/javascriptLogo.png';
import jqLogo from '../../assets/jqueryLogo.png';
import reactLogo from '../../assets/reactLogo.png';
import cssLogo from '../../assets/css3Logo.svg';
import htmlLogo from '../../assets/html5Logo.png';
import bootstrapLogo from '../../assets/bootstrapLogo.svg';
import nodeLogo from '../../assets/nodejsLogo.png';
import npmLogo from '../../assets/npmLogo.svg';
import parcelLogo from '../../assets/parcelLogo.png';
import webpackLogo from '../../assets/webpackLogo.png';
import dotIcon from '../../assets/blueBoxIcon.png';
import solverIcon from '../../assets/solverIcon.png';
import communicationIcon from '../../assets/communicationIcon.png';
import creativeIcon from '../../assets/creativeIcon.png';
import proIcon from '../../assets/certIcon.svg';
import trelloLogo from '../../assets/trelloLogo.png';
import jiraLogo from '../../assets/jiraLogo.png';
import jestLogo from '../../assets/jestLogo.png';
import enzymeLogo from '../../assets/enzymeLogo.png';

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
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="jsLogo" className="techLogo" src={jsLogo} />
            <div className="logo-text">
              <p>Javascript | ES6</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="jqLogo" className="techLogo" src={jqLogo} />
            <div className="logo-text">
              <p>jQuery</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="reactLogo" className="techLogo" src={reactLogo} />
            <div className="logo-text">
              <p>React</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="htmlLogo" className="techLogo" src={htmlLogo} />
            <div className="logo-text">
              <p>HTML5</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="cssLogo" className="techLogo" src={cssLogo} />
            <div className="logo-text">
              <p>CSS3</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="bootstrapLogo" className="techLogo" src={bootstrapLogo} />
            <div className="logo-text">
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="nodeLogo" className="techLogo" src={nodeLogo} />
            <div className="logo-text">
              <p>Node.js</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="npmLogo" className="techLogo" src={npmLogo} />
            <div className="logo-text">
              <p>npm</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="parcelLogo" className="techLogo" src={parcelLogo} />
            <div className="logo-text">
              <p>Parcel</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="webpackLogo" className="techLogo" src={webpackLogo} />
            <div className="logo-text">
              <p>Webpack</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
      </div>
      <div className="skills-group">
        <p>PRODUCTION SKILLS</p>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="jiraLogo" className="techLogo" src={jiraLogo} />
            <div className="logo-text">
              <p>Jira</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="trelloLogo" className="techLogo" src={trelloLogo} />
            <div className="logo-text">
              <p>Trello</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="jestLogo" className="techLogo" src={jestLogo} />
            <div className="logo-text">
              <p>Jest Unit Testing</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="enzymeLogo" className="techLogo" src={enzymeLogo} />
            <div className="logo-text">
              <p>Enzyme Testing</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <ul>
          <li>Agile | Jira | Trello</li>
          <li>Git | Github</li>
          <li>TDD | BDD | Jest | Enzyme</li>
          <li>JSDoc | GHF Markdown</li>
        </ul>
      </div>
      <div className="skills-group">
        <p>SOFT SKILLS</p>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img
              id="communicationIcon"
              className="techLogo"
              src={communicationIcon}
            />
            <div className="logo-text">
              <p>Communicator</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="solverIcon" className="techLogo" src={solverIcon} />
            <div className="logo-text">
              <p>Problem Solver</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="creativeIcon" className="techLogo" src={creativeIcon} />
            <div className="logo-text">
              <p>Creative</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>
        <div className="skill-row-wrapper">
          <div className="logo-card">
            <img id="proIcon" className="techLogo" src={proIcon} />
            <div className="logo-text">
              <p>Proven Professional</p>
            </div>
          </div>
          <div className="dot-wrapper">
            <img id="dotIcon" className="dot" src={dotIcon} />
            <img id="dotIcon" className="dot" src={dotIcon} />
          </div>
        </div>

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
