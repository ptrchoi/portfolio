//Libraries
import React, { Component } from 'react';

class Chart extends Component {
	render() {
		return (
			<div className="skills-chart">
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
				<div className="charts">
					<div className="chart chart-tech">
						<span className="chart-title">Front End Technologies</span>
						<ul className="chart-horizontal">
							<li className="chart-bar bar-30">
								<span className="bar-label">Javascript</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">React</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">CSS</span>
							</li>
							<li className="chart-bar bar-30">
								<span className="bar-label">Javascript</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">React</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">CSS</span>
							</li>
						</ul>
					</div>
					<div className="chart chart-ux">
						<span className="chart-title">UX & Production</span>
						<ul className="chart-horizontal">
							<li className="chart-bar bar-30">
								<span className="bar-label">Sketch</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Trello</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">Photoshop</span>
							</li>
						</ul>
					</div>
					<div className="chart chart-soft">
						<span className="chart-title">Soft Skills</span>
						<ul className="chart-horizontal">
							<li className="chart-bar bar-30">
								<span className="bar-label">Communication</span>
							</li>
							<li className="chart-bar bar-60">
								<span className="bar-label">Collaboration</span>
							</li>
							<li className="chart-bar bar-90">
								<span className="bar-label">Teamwork</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Chart;
