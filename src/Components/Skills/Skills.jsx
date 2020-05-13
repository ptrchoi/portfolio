//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

//Components
import Confetti from '../confetti/Confetti';
import SkillGroup from '../skillGroup/SkillGroup';
import Chart from '../chart/Chart';

/**
 * React Class Component, renders a responsive content section.
 * @function
 * @param {object} props { size }
 * @return {JSX.Element} - Rendered component.
 */
class Skills extends Component {
	constructor(props) {
		super(props);

		this.state = {
			skillsOrientation: 'portrait'
		};
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			skillsOrientation: nextProps.orientation
		};
	}
	render(props) {
		let { skillsOrientation } = this.state;
		let { size, height, width, orientation } = this.props;

		return (
			<div className="section-wrapper skills-wrapper" style={{ height: height, width: width }}>
				<div className="section-header">
					<h1>Skills</h1>
				</div>
				<SkillGroup size={size} orientation={skillsOrientation} />
				<Chart size={size} orientation={skillsOrientation} />
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
