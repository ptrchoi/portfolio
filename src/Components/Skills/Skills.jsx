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
						<h3>Skilled Developer</h3>
						<p className="skills-text">
							Analytical developer focused on modularity, efficiency and functional programming. Certified
							in several languages and libraries, with numerous modern web apps developed utilizing
							cutting-edge frontend technologies.
						</p>
					</div>
					<div className="skills-group skills">
						<i className="far fa-compass fa-icon" />
						<h3>User-centered Thinker</h3>
						<p className="skills-text">
							Experienced UX and Design professional, well-versed on modern trends and strategies.
							Continually focused on the user's journey and end user experience.
						</p>
					</div>
					<div className="skills-group skills">
						<i className="fas fa-people-carry fa-icon" />
						<h3>Team Player</h3>
						<p className="skills-text">
							Extensive background in software production and deployment, an expert working in agile
							environments. Proven communication and soft skills, collaborating with large distributed
							teams across diverse disciplines, time zones, and cultures.
						</p>
					</div>
				</div>
				<div className="skills-graphic skills">
					<img id="chart" src={chart} alt="chart" />
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
