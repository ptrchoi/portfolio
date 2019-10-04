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
			<div style={{ height: responsiveHeight }} className="section-wrapper skills-wrapper">
				<div className="section-header">
					<h1>Skills</h1>
				</div>
				<div className={classList}>
					<div className="skills-group skills">
						<i className="fas fa-cubes fa-icon" />
						<h3>Front-end Developer</h3>
						<p className="skills-text">
							Front-end Javascript | React | CSS developer, an advocate of modular, efficient, and
							functional programming.
						</p>
					</div>
					<div className="skills-group skills">
						<i className="far fa-compass fa-icon" />
						<h3>User-centered Thinker</h3>
						<p className="skills-text">
							Experienced UX professional, well-versed on modern design trends and UX strategies.
						</p>
					</div>
					<div className="skills-group skills">
						<i className="fas fa-people-carry fa-icon" />
						<h3>Team Player</h3>
						<p className="skills-text">
							Proven communication, soft skills, and collaboration with large distributed teams across
							diverse disciplines, time zones, and cultures.
						</p>
					</div>
				</div>

				<div className="skills-chart skills">
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

				<div className="confetti blur">
					<Confetti
						data={{
							confettiType: 'square',
							number: 100,
							color: 'skills'
						}}
					/>
				</div>
			</div>
		);
	}
}

export default Skills;
