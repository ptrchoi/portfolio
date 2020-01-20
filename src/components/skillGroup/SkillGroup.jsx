//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

class SkillGroup extends Component {
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
		let { classes } = this.props;
		return (
			<div className={classes}>
				<div id="skillsGroup1" className="skills-group skills" onClick={this.clickHandler}>
					<i className="fas fa-cubes skill-group-item-1" />
					<h3 className="skill-group-item-2">Front-end Development</h3>
					<i id="skillsExpandIcon1" className="fas fa-caret-down skill-expand-icon skill-group-item-3" />
					<p id="skillsText1" className="skill-group-item-4">
						Specializing in building dynamic, fluid front end experiences that engage users, while
						constantly learning, leveraging, and innovating with the latest technologies and advanced
						techniques.
					</p>
				</div>
				<div id="skillsGroup2" className="skills-group skills" onClick={this.clickHandler}>
					<i className="far fa-compass skill-group-item-1" />
					<h3 className="skill-group-item-2">User Experience</h3>
					<i id="skillsExpandIcon2" className="fas fa-caret-down skill-expand-icon skill-group-item-3" />
					<p id="skillsText2" className="skill-group-item-4">
						Creative problem-solver, well-versed on modern design trends and UX strategies, consistently
						focused on the user journey, aesthetics, and intuitive design.
					</p>
				</div>
				<div id="skillsGroup3" className="skills-group skills" onClick={this.clickHandler}>
					<i className="fas fa-people-carry skill-group-item-1" />
					<h3 className="skill-group-item-2">Collaboration</h3>
					<i id="skillsExpandIcon3" className="fas fa-caret-down skill-expand-icon skill-group-item-3" />
					<p id="skillsText3" className="skill-group-item-4">
						Proven communication and soft skills in collaborating with large, distributed teams across
						diverse disciplines, time zones, and cultures, with expertise in agile methodologies and
						toolsets.
					</p>
				</div>
			</div>
		);
	}
}

export default SkillGroup;
