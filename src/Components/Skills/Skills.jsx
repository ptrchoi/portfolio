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
	render(props) {
		let { size, height, width, orientation } = this.props;
		const gridClassList = 'skills-grid skills-grid--' + size;
		return (
			<div className="section-wrapper skills-wrapper" style={{ height: height, width: width }}>
				<div className="section-header">
					<h1>Skills</h1>
				</div>
				<SkillGroup gridClassList={gridClassList} orientation={orientation} />
				<Chart size={size} orientation={orientation} />
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
