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
		title: 'Single-page Application - Developer Portfolio (REACT)',
		image: screenPortfolio,
		website: '',
		firebase: '',
		codepen: '',
		description: `A fully responsive, REACT Single-page Application (SPA) with full-screen scrolling and dynamic elements throughout.
		
		Features:
		- REACT | ES6 | SCSS | CSS3 | HTML5
		- CSS animated backgrounds, charts, and transitions
		- Full-screen page scrolling (fullpage.js lib)
		- Responsive scaling layouts, text, and page elements
		- Active-selection Nav-menu and modal mobile menu`
	},
	{
		projectId: 'project-2',
		title: 'The 2017 Refresh Conference Website (Wordpress)',
		image: screenRefresh,
		website: 'https://therefreshconference.org/',
		firebase: '',
		codepen: '',
		description: `As part of a distributed remote team, I redesigned, rebuilt, and managed the Refresh Conference Website for the 2017 annual conference.
		
		Features & Responsibilities:

		- Redesign and rebuild of the site from scratch, using Wordpress as the CMS to support frequent client content updates
		- Design and flows that balanced the needs of new users (ie. About/FAQ/Media/Marketing/CTA’s) with users attending the conference (ie. Payment flow/Events Calendar/Speaker Bios/Sponsors)
		- Note that the Refresh site has since changed, particularly the content, but the site retains the overall design from 2017`
	},
	{
		projectId: 'project-3',
		title: 'Single-Page Application - Product Page (JS)',
		image: screenSpa,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/JayyOP',
		description: `A Single Page Application (SPA) product page, fully responsive, dynamic, and interactive with fluid transitions and animations, built in pure Javascript.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Responsive, scaling background video, text, and page elements
		- Modal image gallery and Nav-menu
		- Nested CSS Grid & Flex-box layouts
		- Fictional product page based on content from guitarsalon.com`
	},
	{
		projectId: 'project-4',
		title: 'Markdown Editor with Live Preview (REACT)',
		image: screenMarkdown,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/rqPKJV',
		description: `A GitHub-flavored Markdown Editor which renders HTML in a real-time, live Previewer.
		
		Features:
		- REACT | ES6 | SCSS | CSS3 | HTML5
		- Functional programming, higher-order functions
		- Advanced ES6 features
		- Modular programming with React and SCSS components`
	},
	{
		projectId: 'project-5',
		title: 'Virtual Drum Machine (REACT)',
		image: screenDrum,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/Xyrppy',
		description: `A responsive REACT Drum Machine app that supports touch, mouse, and keyboard inputs, and features multiple sound banks themes.
		
		Features:
		- REACT ES6 | SCSS | CSS3 | HTML5
		- Functional programming, higher-order functions
		- Advanced ES6 features
		- Fully responsive, supporting all input types
		- Standard and Jazz drum kit sound banks
		- Modular programming with React and SCSS components.`
	},
	{
		projectId: 'project-6',
		title: 'Technical Document (JS)',
		image: screenTech,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
		description: `An example of a modern Technical Document page which adheres to Code Element Styling. This page was built from scratch with pure JS and CSS, using VS Code’s site and content as a reference/mockup.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Fully responsive with scaling text and page elements
		- Persistent active-selection Nav-menu and modal mobile menu`
	},
	{
		projectId: 'project-7',
		title: 'Wikipedia Viewer (JS + Bootstrap)',
		image: screenWiki,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/ZWLMzq',
		description: `A Wikipedia Viewer app that displays Wikipedia search results in a dynamic masonry card layout.
		
		Features:
		- JS | jQuery | CSS3 | Bootstrap | HTML5
		- Wikipedia API
		- Masonry card grid layout (masonry-layout)`
	},
	{
		projectId: 'project-8',
		title: 'Materal Design Calculator (REACT)',
		image: screenCalc,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
		description: `A Material-themed REACT Calculator app that is fully responsive and supports touch and keyboard inputs.
		
		Features:
		- JS | ES6 | REACT | jQuery | SCSS | CSS3
		- Mobile-first, responsive design with font-size scaling
		- Touch as well as mouse and keyboard input
		- Functional programming, higher-order functions, advanced ES6 features`
	},
	{
		projectId: 'project-9',
		title: 'Pomodoro Clock (JS + Bootstrap)',
		image: screenPomodoro,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/RaQdya',
		description: `A customizable Pomodoro Clock app for time management/time-boxing.
		
		Features:
		- JS | jQuery | CSS3 | Bootstrap | HTML5
		- Customizable work and rest session times`
	},
	{
		projectId: 'project-10',
		title: 'Classic Simon Game',
		image: screenSimon,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/wGXNKm',
		description: `A fully functional version of the classic game of Simon with authentic aesthetics, sound effects, and features.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Strict game mode
		- Custom assets`
	},
	{
		projectId: 'project-11',
		title: 'Tic-Tac-Toe Game',
		image: screenTictac,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/zqjzaL',
		description: `A fully interactive version of the classic game of Tic-Tac-Toe, played against computer AI that responds dynamically to game results.
		
		Features:
		- vanilla JS | pure CSS | HTML5
		- Multiple AI difficulty settings
		- Custom assets`
	},
	{
		projectId: 'project-12',
		title: 'REACT Quote Generator',
		image: screenQuote,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/mQEMXv',
		description: `A Quote Generator app that displays inspirational-themed quotes with full-screen, responsive hi-res images.
		
		Features:
		- REACT | jQuery | SCSS | CSS3
		- Forismatic and Unsplash API’s
		- Responsive design with full-screen scaling background images and responsive font-size scaling
		- Theme-filtered background images, randomly generated from Unsplash's image collections
		- Controls for manual or auto-looping and sharing via tweet button`
	},
	{
		projectId: 'project-13',
		title: 'Dynamic Weather App (JS + Bootstrap)',
		image: screenWeather,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/grwMJv',
		description: `A Weather app that leverages a device’s HTML5 Geolocation to generate and display real-time local weather conditions with corresponding full-screen, responsive scaling background weather images.
		
		Features:
		- vanilla JS | CSS3 | Bootstrap | HTML5
		- OpenWeatherMap API
		- HTML5 device geolocation
		- Full-screen dynamic weather and time-of-day background images
		- Current weather from major cities around the world`
	},
	{
		projectId: 'project-14',
		title: 'Twitch.tv Stream Tracker (JS)',
		image: screenTwitch,
		website: '',
		firebase: '',
		codepen: 'https://codepen.io/ptrchoi/pen/JXWOdL',
		description: `A Twitch.tv stream tracking app that displays the live status of followed channels, which can be selected to view live streams.
		
		Features:
		- JS | jQuery | pure CSS | HTML5
		- Twitch.tv API`
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
