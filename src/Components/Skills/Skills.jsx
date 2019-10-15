//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';
import Chart from '../chart/Chart';

/**
 * React Class Component, renders a responsive content section.
 * @function
 * @param {object} props { size }
 * @return {JSX.Element} - Rendered component.
 */
class Skills extends Component {
	render(props) {
		let { size } = this.props;
		const classList = 'skills-grid skills-grid--' + size;

		return (
			<div className="section-wrapper skills-wrapper">
				<div className="section-header">
					<h1>Skills</h1>
				</div>
				<div className={classList}>
					<div className="skills-group skills">
						<i className="fas fa-cubes fa-icon skill-group-item-1" />
						<h3 className="skill-group-item-2">Front-end Developer</h3>
						<p className="skill-group-item-3">
							Front-end Javascript | React | CSS developer, an advocate of modular, efficient, and
							functional programming.
						</p>
					</div>
					<div className="skills-group skills">
						<i className="far fa-compass fa-icon skill-group-item-1" />
						<h3 className="skill-group-item-2">User-centered Thinker</h3>
						<p className="skill-group-item-3">
							Experienced UX professional, well-versed on modern design trends and UX strategies.
						</p>
					</div>
					<div className="skills-group skills">
						<i className="fas fa-people-carry fa-icon skill-group-item-1" />
						<h3 className="skill-group-item-2">Team Player</h3>
						<p className="skill-group-item-3">
							Proven communication, soft skills, and collaboration with large distributed teams across
							diverse disciplines, time zones, and cultures.
						</p>
					</div>
				</div>
				<div className="skills-chart-wrapper skills">
					<Chart />
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
