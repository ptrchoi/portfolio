//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

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
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
		this.state = {
			expandedTextID: ''
		};
	}
	clickHandler(e) {
		e.preventDefault();

		let { expandedTextID } = this.state;
		let groupID = e.currentTarget.id;
		let group = $('#' + groupID);
		let icon = $('#' + e.currentTarget.children[2].id); //Get the icon element by ID
		let p = $('#' + e.currentTarget.children[3].id); //Get the paragraph element by ID

		//IF click is on an already expanded group, close it;
		//ELSE close any expanded groups and open the clicked one.
		if (groupID === expandedTextID) {
			group.removeClass('skills-group--expand');
			icon.removeClass('fa-caret-left');
			icon.addClass('fa-caret-down');
			p.removeClass('skills-text--show');
			groupID = '';
		} else {
			$('.skills-group').removeClass('skills-group--expand');
			$('.skill-group-item-3').removeClass('fa-caret-left');
			$('.skill-group-item-4').removeClass('skills-text--show');
			group.addClass('skills-group--expand');
			icon.addClass('fa-caret-left');
			p.addClass('skills-text--show');
		}

		this.setState({
			expandedTextID: groupID
		});
	}
	render(props) {
		let { size } = this.props;
		const classList = 'skills-grid skills-grid--' + size;

		return (
			<div className="section-wrapper skills-wrapper">
				<div className="section-header">
					<h1>Skills</h1>
				</div>
				<div className={classList}>
					<div id="skillsGroup1" className="skills-group skills" onClick={this.clickHandler}>
						<i className="fas fa-cubes skill-group-item-1" />
						<h3 className="skill-group-item-2">Front-end Developer</h3>
						<i id="skillsExpandIcon1" className="fas fa-caret-down skill-expand-icon skill-group-item-3" />
						<p id="skillsText1" className="skill-group-item-4">
							Front-end Javascript | React | CSS developer, an advocate of modular, efficient, and
							functional programming.
						</p>
					</div>
					<div id="skillsGroup2" className="skills-group skills" onClick={this.clickHandler}>
						<i className="far fa-compass skill-group-item-1" />
						<h3 className="skill-group-item-2">User-centered Thinker</h3>
						<i id="skillsExpandIcon2" className="fas fa-caret-down skill-expand-icon skill-group-item-3" />
						<p id="skillsText2" className="skill-group-item-4">
							Experienced UX professional, well-versed on modern design trends and UX strategies.
						</p>
					</div>
					<div id="skillsGroup3" className="skills-group skills" onClick={this.clickHandler}>
						<i className="fas fa-people-carry skill-group-item-1" />
						<h3 className="skill-group-item-2">Team Player</h3>
						<i id="skillsExpandIcon3" className="fas fa-caret-down skill-expand-icon skill-group-item-3" />
						<p id="skillsText3" className="skill-group-item-4">
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
