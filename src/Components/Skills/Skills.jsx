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
	updateOrientation(orientation) {
		if (orientation === 'landscape') {
			$('#skillsChartWrapper').addClass('skills-chart-wrapper--landscape');
		} else {
			$('#skillsChartWrapper').removeClass('skills-chart-wrapper--landscape');
		}
	}
	render(props) {
		let { size, height, width, orientation } = this.props;
		const gridClassList = 'skills-grid skills-grid--' + size;
		const chartClassList = 'skills skills-chart-wrapper skills-chart-wrapper--' + size;
		this.updateOrientation(orientation);

		return (
			<div className="section-wrapper skills-wrapper" style={{ height: height, width: width }}>
				<div className="section-header">
					<h1>Skills</h1>
				</div>
				<SkillGroup gridClassList={gridClassList} orientation={orientation} />
				<div id="skillsChartWrapper" className={chartClassList}>
					<Chart size={size} />
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
