//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

class Chart extends Component {
	// updateOrientation(orientation) {
	// 	if (orientation === 'landscape') {
	// 		$('#skillsChart').addClass('skills-chart--landscape');
	// 		console.log('orientation === landscape');
	// 	} else {
	// 		$('#skillsChart').removeClass('skills-chart--landscape');
	// 		console.log('orientation === portrait');
	// 	}
	// }
	render(props) {
		let { size } = this.props;
		// console.log('this.props.orientation: ', orientation);
		// this.updateOrientation(orientation);
		const chartClassList = 'skills-chart skills-chart--' + size;
		return (
			<div id="skillsChart" className={chartClassList}>
				<div className="charts">
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
						<ul className="chart-horizontal">
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
								<span className="bar-label">jQuery</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Firebase</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">CSS3 | SASS | SCSS</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">HTML5</span>
							</li>
						</ul>
					</div>
					<div className="chart chart-ux">
						<span className="chart-title">UX & Design</span>
						<ul className="chart-horizontal">
							<li className="chart-bar bar-90">
								<span className="bar-label">Design Strategy | User Research</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Wireframes | Mockups | Prototypes</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Sketch | Photoshop</span>
							</li>
						</ul>
					</div>
					<div className="chart chart-soft">
						<span className="chart-title">Production & Collaboration</span>
						<ul className="chart-horizontal">
							<li className="chart-bar bar-90">
								<span className="bar-label">Jira | Trello | Confluence | Slack</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Github | Perforce</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Jest | Enzyme</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">Communication | Soft Skills | Teamwork</span>
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
