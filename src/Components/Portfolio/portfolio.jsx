//Libraries
import React, { Component } from 'react';

//Components
import Card from '../card/Card';
import Confetti from '../confetti/Confetti';

//Assets
import screenSpa from '../../assets/project_spa.png';
import screenCalc from '../../assets/project_calc.png';
import screenTech from '../../assets/project_tech.png';
import screenDrum from '../../assets/project_drum.png';
import screenQuote from '../../assets/project_quote.png';
import screenSimon from '../../assets/project_simon.png';
import screenTictac from '../../assets/project_tictac.png';
import screenMarkdown from '../../assets/project_markdown.png';
import screenTwitch from '../../assets/project_twitch.png';
import screenPomodoro from '../../assets/project_pomodoro.png';
import screenWeather from '../../assets/project_weather.png';
import screenWiki from '../../assets/project_wiki.png';

/**
 * Functional React Component, renders a content section of "cards".
 * @function
 * @return {JSX.Element} - Rendered component.
 */

const CARDS = [
	{
		projectId: 'project-1',
		title: 'Single-page Application (SPA) - Product Page',
		image: screenSpa,
		link: 'https://codepen.io/ptrchoi/pen/JayyOP',
		description:
			'A pure JS & CSS demo of a single-page application (SPA), fully responsive product page. Nested Flex-Box & CSS Grid layouts, scaling video background, nav-menu & image gallery modals, and user-centered design elements throughout.',
		flipped: false
	},
	{
		projectId: 'project-2',
		title: 'REACT Drum Machine',
		image: screenDrum,
		link: 'https://codepen.io/ptrchoi/pen/Xyrppy',
		description:
			'A REACT Drum Machine app, responsive with touch and keyboard inputs, demonstrating functional programming  with higher-order functions, advanced ES6 features, and modular programming with React and SCSS components.',
		flipped: false
	},
	{
		projectId: 'project-3',
		title: 'Weather App',
		image: screenWeather,
		link: 'https://codepen.io/ptrchoi/pen/grwMJv',
		description: 'Weather App',
		flipped: false
	},
	{
		projectId: 'project-4',
		title: 'Pomodoro Clock App',
		image: screenPomodoro,
		link: 'https://codepen.io/ptrchoi/pen/RaQdya',
		description: 'POMODORO CLOCK APP',
		flipped: false
	},
	{
		projectId: 'project-5',
		title: 'Markdown Editor with Live Preview',
		image: screenMarkdown,
		link: 'https://codepen.io/ptrchoi/pen/rqPKJV',
		description:
			'A Live Markdown Editor Preview App, built in REACT. Adhering to GIT Markdown rules, the Editor window displays the resulting Markdown in real-time.',
		flipped: false
	},
	{
		projectId: 'project-6',
		title: 'REACT Calculator',
		image: screenCalc,
		link: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
		description:
			'A simple REACT Calculator app with a clean, modern Material theme, responsive with touch and keyboard inputs, demonstrating functional programming with higher-order functions, advanced ES6 features, and modular programming with React and SCSS components.',
		flipped: false
	},
	{
		projectId: 'project-7',
		title: 'Random Quote Generator',
		image: screenQuote,
		link: 'https://codepen.io/ptrchoi/pen/mQEMXv',
		description:
			'A simple REACT Web App which generates randomized quotes and backgrounds, integrating with the Forismatic API. Fully responsive and designed to have a calming effect.',
		flipped: false
	},
	{
		projectId: 'project-8',
		title: 'Simon Game',
		image: screenSimon,
		link: 'https://codepen.io/ptrchoi/pen/wGXNKm',
		description:
			'The classic game of Simon, app built with pure JS & CSS. Features custom assets, animations, audio, Start and Strict game features.',
		flipped: false
	},
	{
		projectId: 'project-9',
		title: 'Wikipedia Reader App',
		image: screenWiki,
		link: 'https://codepen.io/ptrchoi/pen/ZWLMzq',
		description: 'Wikipedia Reader App',
		flipped: false
	},
	{
		projectId: 'project-10',
		title: 'Tic-Tac-Toe Game',
		image: screenTictac,
		link: 'https://codepen.io/ptrchoi/pen/zqjzaL',
		description:
			'A classic Tic-Tac-Toe game app built with pure JS & CSS. Features Game AI with text feedback on two difficulty level settings, score tracking, piece selection, and reset.',
		flipped: false
	},
	{
		projectId: 'project-11',
		title: 'Twitch TV App',
		image: screenTwitch,
		link: 'https://codepen.io/ptrchoi/pen/JXWOdL',
		description: 'Twitch TV App',
		flipped: false
	},
	{
		projectId: 'project-12',
		title: 'Technical Documentation Page',
		image: screenTech,
		link: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
		description:
			"A pure JS & CSS demo of a responsive technical document, recreating a page from VS Code's site from scratch. Featuring active menu scrolling, persistent modal nav-menu, and modern Code Element styling.",
		flipped: false
	}
];

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: CARDS
		};
	}

	render(props) {
		let { size } = this.props;
		const card = this.state.cards;
		const classList = 'card-grid card-grid--' + size;

		return (
			<div className="section-wrapper portfolio-wrapper">
				<div className="section-header">
					<h1>Web Portfolio</h1>
				</div>
				<div className={classList}>
					<Card card={card[0]} />
					<Card card={card[1]} />
					<Card card={card[2]} />
					<Card card={card[3]} />
					<Card card={card[4]} />
					<Card card={card[5]} />
					<Card card={card[6]} />
					<Card card={card[7]} />
					<Card card={card[8]} />
					<Card card={card[9]} />
					<Card card={card[10]} />
					<Card card={card[11]} />
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
