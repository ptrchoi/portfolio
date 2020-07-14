//Libraries
import React, { Component } from 'react';

//Components
import Card from '../card/Card';
import Confetti from '../confetti/Confetti';

//Assets
import screenRefresh from '../../assets/project_refresh.png';
import screenSpa from '../../assets/project_spa.png';
import screenCalc from '../../assets/project_calc.png';
import screenTech from '../../assets/project_tech.png';
import screenDrum from '../../assets/project_drum.png';
import screenQuote from '../../assets/project_quote.png';
import screenSimon from '../../assets/project_simon.png';
import screenTictac from '../../assets/project_tictac.png';
import screenMarkdown from '../../assets/project_markdown.png';
import screenPomodoro from '../../assets/project_pomodoro.png';
import screenWeather from '../../assets/project_weather.png';
import screenWiki from '../../assets/project_wiki.png';

/**
 * Functional React Component, renders a content section of "cards".
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const CARDS = [
	// {
	// 	projectId: 'project-1',
	// 	title: 'Single-page Application - Developer Portfolio (REACT)',
	// 	image: screenPortfolio,
	// 	website: '',
	// 	firebase: '',
	// 	codepen: '',
	// 	description: `A fully responsive, REACT Single-page Application (SPA) with full-screen scrolling and dynamic elements throughout.

	// 	Features:
	// 	- REACT | ES6 | SCSS | CSS3 | HTML5
	// 	- CSS animated backgrounds, charts, and transitions
	// 	- Full-screen page scrolling (fullpage.js lib)
	// 	- Responsive scaling layouts, text, and page elements
	// 	- Active-selection Nav-menu and modal mobile menu`
	// },
	{
		projectId: 'project-1',
		title: 'Inspiration App',
		image: screenQuote,
		website: '',
		firebase: 'https://quotes.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/mQEMXv',
		description: `A React app that generates inspirational quotes over fullscreen, high-resolution images. Fully responsive, fluidly scaling images and text, with content pulling from several popular API's.
		
		Features:
		- REACT | jQuery | SCSS | CSS3
		- Forismatic, Unsplash, and Twitter API’s
		- Responsive design with full-screen fluidly scaling background images and text, with transition animations
		- Selectable image themes, about modal overlay`
	},
	{
		projectId: 'project-2',
		title: 'Single-Page Application - Product Page (JS)',
		image: screenSpa,
		website: '',
		firebase: 'https://product-spa.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/JayyOP',
		description: `A pure Javascript & CSS Single Page Application (SPA) product page, fully responsive, dynamic, and interactive with fluid transitions and animations.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Responsive, scaling background video, text, and page elements
		- Modal image gallery and Nav-menu
		- Nested CSS Grid & Flex-box layouts
		- Fictional product page based on content from guitarsalon.com`
	},
	{
		projectId: 'project-3',
		title: 'Virtual Drum Machine (REACT)',
		image: screenDrum,
		website: '',
		firebase: 'https://drum-machine.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/Xyrppy',
		description: `A responsive REACT Drum Machine app that supports touch, mouse, and keyboard inputs; features multiple sound banks themes.
		
		Features:
		- REACT ES6 | SCSS | CSS3 | HTML5
		- Functional programming, higher-order functions
		- Advanced ES6 features
		- Fully responsive, supporting all input types
		- Standard and Jazz drum kit sound banks
		- Modular programming with React and SCSS components.`
	},
	{
		projectId: 'project-4',
		title: 'Markdown Editor with Live Preview (REACT)',
		image: screenMarkdown,
		website: '',
		firebase: 'https://markdown-previewer.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/rqPKJV',
		description: `A GitHub-flavored Markdown Editor which renders HTML in a real-time, live Previewer.
		
		Features:
		- REACT | ES6 | SCSS | CSS3 | HTML5
		- Functional programming, higher-order functions
		- Advanced ES6 features
		- Modular programming with React and SCSS components`
	},
	{
		projectId: 'project-5',
		title: 'Technical Document (JS)',
		image: screenTech,
		website: '',
		firebase: 'https://technical-doc.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
		description: `An example of a modern Technical Document page which adheres to Code Element Styling. This page was built from scratch with pure JS and CSS, using VS Code’s site and content as a reference/mockup.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Fully responsive with scaling text and page elements
		- Persistent active-selection Nav-menu and modal mobile menu`
	},
	{
		projectId: 'project-6',
		title: 'Wikipedia Viewer (JS + Bootstrap)',
		image: screenWiki,
		website: '',
		firebase: 'https://qwik-wiki.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/ZWLMzq',
		description: `A Wikipedia Viewer app that displays Wikipedia search results in a dynamic masonry card layout.
		
		Features:
		- JS | jQuery | CSS3 | Bootstrap | HTML5
		- Wikipedia API
		- Masonry card grid layout (masonry-layout)`
	},
	{
		projectId: 'project-7',
		title: 'Materal Design Calculator (REACT)',
		image: screenCalc,
		website: '',
		firebase: 'https://calculator.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
		description: `A Material-themed REACT Calculator app that is fully responsive and supports touch and keyboard inputs.
		
		Features:
		- JS | ES6 | REACT | jQuery | SCSS | CSS3
		- Mobile-first, responsive design with font-size scaling
		- Touch as well as mouse and keyboard input
		- Functional programming, higher-order functions, advanced ES6 features`
	},
	{
		projectId: 'project-8',
		title: 'Pomodoro Clock (JS + Bootstrap)',
		image: screenPomodoro,
		website: '',
		firebase: 'https://pomodoro.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/RaQdya',
		description: `A customizable Pomodoro Clock app for time management/time-boxing.
		
		Features:
		- JS | jQuery | CSS3 | Bootstrap | HTML5
		- Customizable work and rest session times`
	},
	{
		projectId: 'project-9',
		title: 'Classic Simon Game',
		image: screenSimon,
		website: '',
		firebase: 'https://simon.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/wGXNKm',
		description: `A fully functional version of the classic game of Simon with authentic aesthetics, sound effects, and features.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Strict game mode
		- Custom assets`
	},
	{
		projectId: 'project-10',
		title: 'Tic-Tac-Toe Game',
		image: screenTictac,
		website: '',
		firebase: 'https://tic-tac-toe.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/zqjzaL',
		description: `A fully interactive version of the classic game of Tic-Tac-Toe, played against computer AI that responds dynamically to game results.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Multiple AI difficulty settings
		- Custom assets`
	},
	{
		projectId: 'project-11',
		title: 'Dynamic Weather App (JS + Bootstrap)',
		image: screenWeather,
		website: '',
		firebase: 'https://weather.ptrchoi.com',
		codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/grwMJv',
		description: `A Weather app that leverages a device’s HTML5 Geolocation to generate and display real-time local weather conditions.
		
		Features:
		- vanilla JS | CSS3 | Bootstrap | HTML5
		- OpenWeatherMap API
		- HTML5 device geolocation
		- Current weather from major international locales`
	},
	{
		projectId: 'project-12',
		title: 'The 2017 Refresh Conference Website (Wordpress)',
		image: screenRefresh,
		website: 'https://therefreshconference.org/',
		firebase: '',
		codepen: '',
		description: `Responsible for redesigning, rebuilding, and managing the Refresh Conference Website for the 2017 annual conference.
		
		- Redesign and rebuild of the site from scratch, using Wordpress as the CMS to support frequent client content updates
		- Design and flows that balanced the needs of new users (ie. About/FAQ/Media/Marketing/CTA’s) with users attending the conference (ie. Payment flow/Events Calendar/Speaker Bios/Sponsors)
		- Note that the Refresh site has since changed, particularly the content, but the site retains the overall design from 2017`
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

		return (
			<div className="section-wrapper portfolio-wrapper">
				<div className="section-header">
					<h1>Web Portfolio</h1>
				</div>
				<div className="card-container">
					<Card card={card[0]} size={size} />
					<Card card={card[1]} size={size} />
					<Card card={card[2]} size={size} />
					<Card card={card[3]} size={size} />
					<Card card={card[4]} size={size} />
					<Card card={card[5]} size={size} />
					<Card card={card[6]} size={size} />
					<Card card={card[7]} size={size} />
					<Card card={card[8]} size={size} />
					<Card card={card[9]} size={size} />
					<Card card={card[10]} size={size} />
					<Card card={card[11]} size={size} />
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
