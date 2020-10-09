//Libraries
import React, { Component } from 'react';
// import $ from 'jquery';

class Chart extends Component {
  render(props) {
    let { size, orientation } = this.props;
    const wrapperClassList =
      'chart-wrapper chart-wrapper--' + size + ' chart-wrapper--' + orientation;
    const contentClassList = 'chart-content chart-content--' + size;

    return (
      <div className={wrapperClassList}>
        <div className="chart-group">
          <ul className="lines">
            <li className="line line-0" />
            <li className="line line-30">
              <span className="line-label">Adept</span>
            </li>
            <li className="line line-60">
              <span className="line-label">Skilled</span>
            </li>
            <li className="line line-90">
              <span className="line-label">Advanced</span>
            </li>
          </ul>
          <div className="chart chart-tech">
            <span className="chart-title">Front End Technologies</span>
            <ul className={contentClassList}>
              <li className="chart-bar bar-90">
                <span className="bar-label">Javascript | ES6</span>
              </li>
              <li className="chart-bar bar-90">
                <span className="bar-label">React</span>
              </li>
              <li className="chart-bar bar-30">
                <span className="bar-label">Redux</span>
              </li>
              <li className="chart-bar bar-60">
                <span className="bar-label">Node.js | Firebase</span>
              </li>
              <li className="chart-bar bar-90">
                <span className="bar-label">CSS3 | SCSS | SASS</span>
              </li>
              <li className="chart-bar bar-90">
                <span className="bar-label">HTML5</span>
              </li>
            </ul>
          </div>
          <div className="chart chart-ux">
            <span className="chart-title">UX & Design</span>
            <ul className={contentClassList}>
              <li className="chart-bar bar-90">
                <span className="bar-label">Design Strategy</span>
              </li>
              <li className="chart-bar bar-60">
                <span className="bar-label">
                  Wireframes | Mockups | Prototypes
                </span>
              </li>
              <li className="chart-bar bar-60">
                <span className="bar-label">Sketch | Photoshop</span>
              </li>
            </ul>
          </div>
          <div className="chart chart-soft">
            <span className="chart-title">Production & Collaboration</span>
            <ul className={contentClassList}>
              <li className="chart-bar bar-90">
                <span className="bar-label">
                  Jira | Trello | Confluence | Slack
                </span>
              </li>
              <li className="chart-bar bar-60">
                <span className="bar-label">Github | Perforce</span>
              </li>
              <li className="chart-bar bar-30">
                <span className="bar-label">Jest | Enzyme</span>
              </li>
              <li className="chart-bar bar-90">
                <span className="bar-label">
                  Communication | Soft Skills | Teamwork
                </span>
              </li>
              <li className="chart-bar bar-90">
                <span className="bar-label">Professionalism | Quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
