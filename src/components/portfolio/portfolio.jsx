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
  {
    projectId: 'project-1',
    title: 'Weather App (REACT)',
    image: screenWeather,
    website: '',
    firebase: 'https://weather.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/grwMJv',
    description: `Dynamic, responsive, real-time weather app with location-based, high-resolution images.
		
		Features:
		- Detailed weather conditions with daily and hourly forecasts
		- Dynamic photo images and icons based on location and weather conditions
		- Geolocation, Open Weather, and Unsplash API integration
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-2',
    title: 'Single-Page Application Product Page (JS)',
    image: screenSpa,
    website: '',
    firebase: 'https://woodnstrings.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: `Pure Javascript and CSS Single Page Application (SPA) product page example, with fully responsive, dynamic page elements.
		
		Features:
		- Responsive design with dynamic transitions and animations
		- Scaling background video, modal image gallery, and mobile nav-menu
		- Vanilla JS | CSS | HTML5 | Firebase`,
  },
  {
    projectId: 'project-3',
    title: 'Top Tweets & Wikis App (REACT)',
    image: screenWiki,
    website: '',
    firebase: 'https://top-tweet-wiki.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/ZWLMzq',
    description: `Find out what's trending on Twitter and learn more from Wikipedia, displayed in a dynamic, compact masonry card layout.
		
		Features:
    - Neumorphic design and styling with responsive, masonry card grid layout
    - Real-time Twitter feeds from major US and international cities
    - Supports Wikipedia topic searches
		- Twitter and Wikipedia API integration
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-4',
    title: 'Inspiration App (REACT)',
    image: screenQuote,
    website: '',
    firebase: 'https://quotes.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/mQEMXv',
    description: `Inspirational quotes displayed with high-resolution, full-screen, themed photo images.
		
		Features:
		- Responsive design with full-screen scaling background images, text, and page elements
		- Selectable themes from Unsplash.com images
		- Forismatic and Unsplash API integration
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-5',
    title: 'Virtual Drum Machine (REACT)',
    image: screenDrum,
    website: '',
    firebase: 'https://drum-machine.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/Xyrppy',
    description: `Virtual drum machine supporting touch, mouse, and keyboard inputs with multiple drum kit themes.
		
		Features:
		- Variety of drum themes and beats
		- Touch and keyboard/mouse input support
		- REACT | ES6 | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-6',
    title: 'Markdown Editor with Live Preview (REACT)',
    image: screenMarkdown,
    website: '',
    firebase: 'https://markdown-previewer.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/rqPKJV',
    description: `GitHub Flavored Markdown editor with real-time, side-by-side HTML previewer.
		
		Features:
    - Responsive design with dynamic side-by-side window layout
    - Supports GitHub Flavored Markdown (GFM)
		- REACT | ES6 | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-7',
    title: 'Technical Document (JS)',
    image: screenTech,
    website: '',
    firebase: 'https://technical-doc.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
    description: `Pure Javascript and CSS Technical Document featuring Code Element Styling. Recreation of VS Code’s 'HTML Programming' website.
		
		Features:
		- From scratch recreation of VSC's technical HTML site
		- Fully responsive with scaling text and page elements
		- Persistent active-selection nav-menu and modal mobile menu
		- Vanilla JS | CSS | HTML5 | Firebase`,
  },
  {
    projectId: 'project-8',
    title: 'Calculator (REACT)',
    image: screenCalc,
    website: '',
    firebase: 'https://calculator.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
    description: `Responsive, Material-themed calculator supporting touch and keyboard/mouse inputs with calculation history tracking.
		
		Features:
		- Fully responsive with touch and keyboard/mouse input support
    - Material design theme
    - Tracks calculation history
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-9',
    title: 'Pomodoro Clock (JS+Bootstrap)',
    image: screenPomodoro,
    website: '',
    firebase: 'https://pomodoro.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/RaQdya',
    description: `Full-featured, adjustable Pomodoro Clock for time management/timeboxing.
		
		Features:
		- Pause, reset, and session time settings
		- JS | jQuery | CSS3 | Bootstrap | HTML5 | Firebase`,
  },
  {
    projectId: 'project-10',
    title: 'Classic Simon Game (JS)',
    image: screenSimon,
    website: '',
    firebase: 'https://simon.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/wGXNKm',
    description: `Pure Javascript and CSS version of the classic game of Simon, with authentic visuals, sound effects, and settings.
		
		Features:
		- Normal and Strict game modes
		- Custom created assets
		- Vanilla JS | CSS | HTML5 | Firebase`,
  },
  {
    projectId: 'project-11',
    title: 'Tic-Tac-Toe (JS)',
    image: screenTictac,
    website: '',
    firebase: 'https://tic-tac-toe.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/zqjzaL',
    description: `Pure Javascript and CSS version of Tic-Tac-Toe, with opponent AI responding dynamically to game conditions.
		
		Features:
		- Multiple AI difficulty settings
		- Dynamic AI text responses
		- Vanilla JS | CSS | HTML5 | Firebase`,
  },
  {
    projectId: 'project-12',
    title: '2017 Refresh Conference Website (Wordpress)',
    image: screenRefresh,
    website: 'https://therefreshconference.org/',
    firebase: '',
    codepen: '',
    description: `Redesigned, rebuilt, and managed the Refresh Conference Website for the 2017 annual conference as part of a distributed team.
		
		- Redesign and rebuild of the site from scratch, using Wordpress as the CMS to support frequent client content updates
		- Created designs and flows that balanced the needs of new visitors with registered conference attendees
		* Note: the Refresh site receives regular updates, but largely retains the designs established in 2017`,
  },
];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARDS,
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
                color: 'about',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
