//Libraries
import React, { Component } from 'react';

//Components
import Card from '../card/Card';
import Confetti from '../confetti/Confetti';

//Assets
import screenshot1 from '../../assets/project_1.png';
import screenshot2 from '../../assets/project_2.png';
import screenshot3 from '../../assets/project_3.png';
import screenshot4 from '../../assets/project_4.png';

/**
 * Functional React Component, renders a content section of "cards".
 * @function
 * @return {JSX.Element} - Rendered component.
 */

const CARDS = [
	{
		projectId: 'project-1',
		title: 'Single-page Application (SPA) - Product Page',
		image: screenshot1,
		link: 'https://codepen.io/ptrchoi/pen/JayyOP',
		description:
			'A pure JS & CSS demo of a single-page application, responsive product page. With nested Flex-Box & CSS Grid layouts, nav-menu & image gallery modals, and user-centered design elements throughout.',
		flipped: false
	},
	{
		projectId: 'project-2',
		title: 'REACT Calculator',
		image: screenshot4,
		link: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
		description:
			'A simple REACT Calculator Web App with a clean, modern Material theme, demonstrating functional programming with higher-order functions, advanced ES6 features, and modular programming with React and SCSS components.',
		flipped: false
	},
	{
		projectId: 'project-3',
		title: 'REACT Drum Machine',
		image: screenshot2,
		link: 'https://codepen.io/ptrchoi/pen/Xyrppy',
		description: 'Click to check it out on Codepen',
		flipped: false
	},
	{
		projectId: 'project-4',
		title: 'Technical Documentation Page',
		image: screenshot3,
		link: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
		description:
			"A pure JS & CSS demo of a responsive technical document, recreating a page from VS Code's site from scratch. With active menu scrolling, persistent modal nav-menu, and modern Code Element styling.",
		flipped: false
	},
	{
		projectId: 'project-5',
		title: 'Markdown Editor with Live Preview',
		image: screenshot1,
		link: 'https://codepen.io/ptrchoi/pen/rqPKJV',
		description: 'Click to check it out on Codepen',
		flipped: false
	},
	{
		projectId: 'project-6',
		title: 'Random Quote Generator',
		image: screenshot4,
		link: 'https://codepen.io/ptrchoi/pen/mQEMXv',
		description:
			'A simple REACT Web App which generates randomized quotes and backgrounds, integrating with the Forismatic API. Fully responsive and designed to have a calming effect.',
		flipped: false
	}
];

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: CARDS
		};

		this.updateCards = this.updateCards.bind(this);
	}
	updateCards(e) {
		let { cards } = this.state;
		let index = cards.findIndex((i) => i.projectId === e.currentTarget.id);
		let isFlipped = cards[index].flipped; //Flipped state of currently clicked card

		this.setState({
			cards: cards
		});

		let alreadyFlippedIndex = cards.findIndex((i) => i.flipped === true); //Check for already flipped cards

		//Flip any already flipped card first
		if (alreadyFlippedIndex > -1 && alreadyFlippedIndex !== index) {
			cards = this.toggleCard(cards, alreadyFlippedIndex, true);
		}

		//Toggle current card
		cards = this.toggleCard(cards, index, isFlipped);

		this.setState({
			cards: cards
		});
	}
	toggleCard(cards, i, flipped) {
		let card = cards[i];

		if (flipped) {
			// .addClass & .removeClass not working ('not a function') - NEED TO FIX!
			// document.getElementById(card.projectId).removeClass('card-flipped');
			document.getElementById(card.projectId).className = 'card';
		} else {
			// document.getElementById(card.projectId).addClass('card-flipped');
			document.getElementById(card.projectId).className = 'card card-flipped';
		}
		card.flipped = !flipped;
		cards[i] = card;

		return cards;
	}
	render(props) {
		let { size } = this.props;
		const card = this.state.cards;
		return (
			<div className="section-wrapper portfolio-wrapper">
				<div className="section-header">
					<h1>Portfolio</h1>
				</div>
				<div className="card-wrapper">
					<Card card={card[0]} handleClick={this.updateCards} />
					<Card card={card[1]} handleClick={this.updateCards} />
					<Card card={card[2]} handleClick={this.updateCards} />
					<Card card={card[3]} handleClick={this.updateCards} />
					<Card card={card[4]} handleClick={this.updateCards} />
					<Card card={card[5]} handleClick={this.updateCards} />
					<div className="confetti blur">
						<Confetti
							data={{
								confettiType: 'square',
								number: 200,
								color: 'about'
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
