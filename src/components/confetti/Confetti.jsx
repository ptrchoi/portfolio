//Libraries
import React, { Component } from 'react';
import { uid } from 'react-uid';

//CONSTANTS
const HOME_COLORS = [
	'rgba(142,213,237,.3)',
	'rgba(219,240,251,.3)',
	'rgba(208,234,248,.3)',
	'rgba(255,255,255,.3)',
	'rgba(251,227,69,.3)',
	'rgba(255,240,193,.3)',
	'rgba(134,168,235,.3)'
];
const ABOUT_COLORS = [
	'rgba(232, 232, 232, 1)',
	'rgba(0, 0, 0, .2)',
	'rgba(216, 232, 237, .7)',
	'rgba(216, 232, 237, 1)',
	'rgba(174, 211, 222,.6)'
];
const SKILLS_COLORS = [ 'rgba(255, 255, 255, 1)', 'rgba(216, 232, 237, .5)', 'rgba(216, 232, 237, 1)' ];
const CONTACT_COLORS = [
	'rgba(255, 255, 255, .1)',
	'rgba(255, 255, 255, .4)',
	'rgba(216, 232, 237, .2)',
	'rgba(216, 232, 237, .4)',
	'rgba(216, 232, 237, .7)'
];

//LOCAL FUNCTIONS
function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
	return (Math.random() * (max - min) + min).toFixed(2);
}
//Component
class Confetti extends Component {
	constructor(props) {
		super(props);

		this.getRandProps = this.getRandProps.bind(this);
		this.createArray = this.createArray.bind(this);
	}
	getRandProps(confettiType, color) {
		let colorSet = HOME_COLORS[getRandInt(0, HOME_COLORS.length - 1)];
		let leftOffset = getRandInt(1, 7) * 10 + '%'; //~10-70%
		let delay = getRandInt(-120, 120) + 's';
		let duration = getRandInt(50, 120) + 's';
		let animNum = String(getRandInt(1, 5));
		let side = getRandFixed(2, 5) + 'vw';
		let shape = '0.8vw';

		if (confettiType === 'circle') {
			shape = '4vw';
		}

		if (color === 'about') {
			colorSet = ABOUT_COLORS[getRandInt(0, ABOUT_COLORS.length - 1)];
		} else if (color === 'skills') {
			colorSet = SKILLS_COLORS[getRandInt(0, SKILLS_COLORS.length - 1)];
		} else if (color === 'contact') {
			colorSet = CONTACT_COLORS[getRandInt(0, CONTACT_COLORS.length - 1)];
		}

		return {
			backgroundColor: colorSet,
			left: leftOffset,
			animationName: 'float' + animNum,
			animationDelay: delay,
			animationDuration: duration,
			animationIterationCount: 'infinite',
			width: side,
			height: side,
			borderRadius: shape
		};
	}
	createArray(count) {
		let arr = [];

		for (let i = 0; i < count; i++) {
			arr.push(i);
		}
		return arr;
	}
	render(props) {
		let { confettiType, number, color } = this.props.data;

		let arr = this.createArray(number);

		return arr.map((el) => {
			return <span key={uid(el)} style={this.getRandProps(confettiType, color)} />;
		});
	}
}

export default Confetti;
