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
    description: `Responsive, real-time weather app with dynamic location-based high-resolution images.
		
		Features:
		- Detailed weather conditions with daily and hourly forecasts
		- Dynamic images based on location and weather conditions
		- Dynamic icons for weather conditions, precipitation %, wind direction
		- OpenWeatherMap API and device geolocation integration
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-2',
    title: 'Single-Page Application Product Page (JS)',
    image: screenSpa,
    website: '',
    firebase: 'https://woodnstrings.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: `Pure Javascript and CSS Single Page Application (SPA) product page example. Fully responsive, dynamic page elements.
		
		Features:
		- Responsive design with dynamic transitions and animations
		- Scaling background video, modal image gallery, and mobile nav-menu
		- Nested CSS Grid & Flex-box layouts
		- Vanilla JS | CSS | HTML5 | Firebase`,
  },
  {
    projectId: 'project-3',
    title: 'Top Tweets & Wikis App (REACT)',
    image: screenWiki,
    website: '',
    firebase: 'https://top-tweet-wiki.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/ZWLMzq',
    description: `Displays top trending tweets and related Wikipedia articles, in a dynamic, responsive masonry card layout.
		
		Features:
		- Neumorphic design and styling
		- Responsive, masonry card grid layout
		- Twitter & Wikipedia API integration
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-4',
    title: 'Inspiration App (REACT)',
    image: screenQuote,
    website: '',
    firebase: 'https://quotes.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/mQEMXv',
    description: `Inspirational quotes displayed with high-resolution, responsive full-screen photo images.
		
		Features:
		- Responsive design with full-screen scaling background images, text, and page elements
		- Selectable image themes from Unsplash categories
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
    description: `GitHub-flavored Markdown editor, renders HTML in a real-time, side-by-side live previewer.
		
		Features:
		- Responsive design with dynamic side-by-side window layout
		- REACT | ES6 | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-7',
    title: 'Technical Document (JS)',
    image: screenTech,
    website: '',
    firebase: 'https://technical-doc.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
    description: `Pure Javascript and CSS Technical Document featuring Code Element Styling. Recreation of Visual Studio Code’s 'HTML Programming' site.
		
		Features:
		- From scratch recreation of VSC's technical HTML site as reference
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
    description: `Material-themed calculator supporting touch and keyboard/mouse inputs.
		
		Features:
		- Fully responsive
		- Material design theme
		- Touch and keyboard/mouse input support
		- REACT | ES6 | jQuery | SCSS | CSS3 | HTML5 | Firebase`,
  },
  {
    projectId: 'project-9',
    title: 'Pomodoro Clock (JS+Bootstrap)',
    image: screenPomodoro,
    website: '',
    firebase: 'https://pomodoro.ptrchoi.com',
    codepen: '', // codepen: 'https://codepen.io/ptrchoi/pen/RaQdya',
    description: `Full-featured Pomodoro Clock with adjustable settings for time management/timeboxing.
		
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
		- Created designs and flows that balanced the needs of new users (ie. About/FAQ/Media/Marketing/CTA’s) with users attending the conference (ie. Payment/Events Calendar/Speaker Bios/Sponsors)
		- *Note that the Refresh site has since changed, particularly the content, but the site retains the overall design from 2017`,
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
