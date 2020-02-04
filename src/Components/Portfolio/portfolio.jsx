//Libraries
import React, { Component } from 'react';

//Components
import Card from '../card/Card';
import Confetti from '../confetti/Confetti';

//Assets
import screenPortfolio from '../../assets/project_portfolio.png';
import screenRefresh from '../../assets/project_refresh.png';
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
		title: 'Single-page Application (SPA) Web Portfolio',
		image: screenPortfolio,
		link: '',
		description: `A fully responsive, Single-page Application web portfolio with full-screen scrolling and dynamic elements throughout.
		
		Features:
		- REACT | ES6 | SCSS | CSS3 | HTML5
		- Full-screen page scrolling (fullpage.js REACT library)
		- CSS animated backgrounds, charts, and transitions
		- Responsive scaling layouts, fonts, and page elements
		- Persistent active-selection Nav-menu and modal mobile menu`
	},
	{
		projectId: 'project-2',
		title: 'The 2017 Refresh Conference Website',
		image: screenRefresh,
		link: 'https://codepen.io/ptrchoi/pen/JayyOP',
		description: `A redesign and rebuild of the Refresh Conference Website for the 2017 annual conference.
		
		Features:
		- Wordpress | Jupiter 5 Theme | Visual Composer | HTML5
		- Payment flow, Video & Photo Library, Speaker/images/bios, Interactive Calendar, Collapsing FAQ
		- Database, site hosting, site staging, remote team, forms, backups
		*	NOTE: the Refresh site has changed since 2017, particularly the content, but the site retains the overall 2017 design and structure`
	},
	{
		projectId: 'project-3',
		title: 'Single-page Application (SPA) Product Page',
		image: screenSpa,
		link: 'https://codepen.io/ptrchoi/pen/JayyOP',
		description: `A Single Page Application product page, fully responsive, dynamic, and interactive with fluid transitions and animations.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Nested CSS Grid & Flex-box layouts
		- Responsive, scaling background video, fonts, and page elements
		- Modal image gallery and Nav-menu`
	},
	{
		projectId: 'project-4',
		title: 'REACT Markdown Editor with Live Preview',
		image: screenMarkdown,
		link: 'https://codepen.io/ptrchoi/pen/rqPKJV',
		description: `A real-time Markdown Previewer web app with a GitHub-flavored Markdown Editor, which renders HTML in a real-time Previewer.
		
		Features:
		- REACT | ES6 | SCSS | CSS3 | HTML5
		- Functional programming, higher-order functions
		- Advanced ES6 features
		- Modular programming with React and SCSS components`
	},
	{
		projectId: 'project-5',
		title: 'Virtual REACT Drum Machine',
		image: screenDrum,
		link: 'https://codepen.io/ptrchoi/pen/Xyrppy',
		description: `A virtual Drum Machine app with touch and keyboard inputs, and multiple themed sound banks.
		
		Features:
		- REACT ES6 | SCSS | CSS3 | HTML5
		- Functional programming, higher-order functions
		- Advanced ES6 features
		- Fully responsive with both touch and keyboard input support
		- Multiple drum kit sound banks
		- Modular programming with React and SCSS components.`
	},
	{
		projectId: 'project-6',
		title: 'Technical Document',
		image: screenTech,
		link: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
		description: `An example of a modern Technical Document page which adheres to Code Element Styling using VS Code’s site and content as a reference/mockup, this page was built from scratch ultilizing pure JS and CSS.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Fully responsive with scaling fonts and page elements
		- Persistent active-selection Nav-menu and modal mobile menu`
	},
	{
		projectId: 'project-7',
		title: 'Wikipedia Viewer',
		image: screenWiki,
		link: 'https://codepen.io/ptrchoi/pen/ZWLMzq',
		description: `A Wikipedia Viewer app that displays Wikipedia search results in a dynamic masonry card layout.
		
		Features:
		- JS | jQuery | CSS3 | Bootstrap | HTML5
		- Wikipedia API
		- Masonry card grid layout (masonry-layout)
		- Search and Randomized results`
	},
	{
		projectId: 'project-8',
		title: 'Twitch.tv Stream Tracker',
		image: screenTwitch,
		link: 'https://codepen.io/ptrchoi/pen/JXWOdL',
		description: `A Twitch.tv stream tracking app that displays the live status of followed channel streams, which can be clicked to view the live streams.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Twitch.tv API
		- Fully responsive with scaling fonts and page elements
		`
	},
	{
		projectId: 'project-9',
		title: 'Material REACT Calculator',
		image: screenCalc,
		link: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
		description: `A REACT Calculator app with a clean, responsive, Material design theme, supporting touch and keyboard inputs.
		
		Features:
		- JS | ES6 | REACT | jQuery | SCSS | CSS3 | Node.js | Webpack
		- Mobile-first, responsive design with font-size scaling
		- Touch as well as mouse and keyboard input
		- Functional programming, higher-order functions, advanced ES6 features`
	},
	{
		projectId: 'project-10',
		title: 'Pomodoro Clock',
		image: screenPomodoro,
		link: 'https://codepen.io/ptrchoi/pen/RaQdya',
		description: `A modern Pomodoro Clock app for time management/timeboxing, with customizable work and rest session times.
		
		Features:
		- vanilla JS | pure CSS | HTML5`
	},
	{
		projectId: 'project-11',
		title: 'Classic Simon Game',
		image: screenSimon,
		link: 'https://codepen.io/ptrchoi/pen/wGXNKm',
		description: `A fully functional version of the classic game of Simon with authentic aesthetics, sound effects, and features.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Strict game mode
		- Custom assets`
	},
	{
		projectId: 'project-12',
		title: 'Tic-Tac-Toe Game',
		image: screenTictac,
		link: 'https://codepen.io/ptrchoi/pen/zqjzaL',
		description: `A fun twist on the classic game of Tic-Tac-Toe played against computer AI that responds dynamically to game results.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Multiple AI difficulty settings
		- Custom assets`
	},
	{
		projectId: 'project-13',
		title: 'REACT Quote Generator',
		image: screenQuote,
		link: 'https://codepen.io/ptrchoi/pen/mQEMXv',
		description: `A Quote Generator app that displays inspirational-themed quotes and full-screen, responsive photography.
		
		Features:
		- JS | ES6 | REACT | jQuery | SCSS | CSS3 | Node.js | Webpack
		- Forismatic and Unsplash API’s
		- Responsive design with full-screen scaling background images and responsive font-size scaling, with transitional animation.
		- Theme-filtered background images, randomly generated from Unsplash's image collections.
		- Controls for manual or auto-looping viewing, quote-sharing via tweet and application information modal overlay`
	},
	{
		projectId: 'project-14',
		title: 'Dynamic Weather App',
		image: screenWeather,
		link: 'https://codepen.io/ptrchoi/pen/grwMJv',
		description: `A Weather app that leverages a device’s HTML5 Geolocation to generate and display real-time local weather conditions with corresponding full-screen, responsive scaling background weather photography.
		
		Features:
		- vanilla JS | CSS3 | Bootstrap | HTML5
		- OpenWeatherMap API
		- HTML5 device geolocation
		- Dynamic weather and time-of-day background images
		- Random Major City generation`
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
					<Card card={card[12]} />
					<Card card={card[13]} />
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
