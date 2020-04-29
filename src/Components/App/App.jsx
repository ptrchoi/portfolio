//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

import 'fullpage.js/vendors/scrolloverflow'; // must be loaded after jQuery and before ReactFullPage
import ReactFullPage from '@fullpage/react-fullpage';

import Debucsser from 'debucsser';

//Components
import Navbar from '../navbar/Navbar';
import Links from '../links/Links';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

//Constants
import constants from '../../constants';
// const SIZE_LARGE = 992;

//DEV ONLY *************REMOVE**************
//Debucsser CSS Debugger settings
const config = {
	color: 'red',
	width: '4px',
	grayscaleOnDebugAll: true
};
const debug = new Debucsser(config).init();
//DEV ONLY *************REMOVE**************

/**
 * App Class Component handles:
 * - rendering of:
 *    - navbar
 *    - content components
 * - passing screen size props to components
 * - ReactFullPage scrolling:
 *    - full page scrolling
 *    - scroll position updates to nav links
 *    - landing page behavior (ie. no navbar)
 */
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSection: 'home',
			viewHeight: 600, //default height
			viewWidth: 0, //default width
			screenSize: 'small', //default size
			orientation: 'portrait', //default
			landscapeHeight: 0 //default '0' for fullpage.js's autoscroll=true
		};

		this.updateScreenSpec = this.updateScreenSpec.bind(this);
		this.renderNav = this.renderNav.bind(this);
		this.renderContent = this.renderContent.bind(this);
	}
	componentDidMount() {
		this.updateScreenSpec();
		window.addEventListener('resize', this.updateScreenSpec);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenSpec);
	}
	updateScreenSpec() {
		let height = window.innerHeight;
		let width = window.innerWidth;
		let { screenSize, orientation, landscapeHeight } = this.state;

		$('.section-wrapper').removeClass('section-wrapper--landscape'); // Clear any previous landscape styles

		//Check for changes to screenSize
		if (width > constants.LARGE_SCREEN_BREAKPOINT) {
			// Ensure width used doesn't exceed MAX_WIDTH
			if (width > constants.MAX_WIDTH) width = constants.MAX_WIDTH;

			screenSize = 'large';

			landscapeHeight = 0; // Set fullpage.js to 'autoscroll=true'
			orientation = 'portrait'; // If large screen, ignore landscape orientation flag, keep default of portrait
		} else {
			screenSize = 'small';

			// On Small screen width, update orientation
			if (width > height) {
				let aspectRatio = height / width;
				height = width / aspectRatio;
				landscapeHeight = height + 1; // DO THIS BEFORE calculating new height; for fullpage.js prop 'responsiveHeight={landscapeHeight}' sets 'autoscroll=false'

				orientation = 'landscape';

				$('.section-wrapper').addClass('section-wrapper--landscape'); // Add landscape specific styling
			} else {
				landscapeHeight = 0; // Set fullpage.js to 'autoscroll=true'
				orientation = 'portrait';
			}
		}

		this.setState({
			viewHeight: height,
			viewWidth: width,
			screenSize: screenSize,
			orientation: orientation,
			landscapeHeight: landscapeHeight
		});
	}
	slideInHeader() {
		$('.section-header').removeClass('slide-in-from-left');
		setTimeout(function() {
			$('.section-header').addClass('slide-in-from-left');
		}, 100);
	}
	slideInSection(slideElement, slideClass) {
		$(slideElement).removeClass(slideClass);
		setTimeout(function() {
			$(slideElement).addClass(slideClass);
		}, 400);
	}
	updateActiveLink(newLink) {
		$('.menu-link').removeClass('active-link'); //clear prev active link

		//Necessary delay to allow Navbar to render before setting active-link when scrolling from Home to About
		setTimeout(function() {
			$(newLink).addClass('active-link');
		}, 600);
	}
	sectionScrolled(destination) {
		let sectionName,
			activeLinkName = false;

		switch (destination) {
			case 1:
				sectionName = 'about';
				break;
			case 2:
				sectionName = 'skills';
				//Add anim class for .chart-bar on scroll
				$('.chart-bar').removeClass('chart-grow');
				setTimeout(function() {
					$('.chart-bar').addClass('chart-grow');
				}, 400);
				break;
			case 3:
				sectionName = 'card';
				activeLinkName = 'portfolio';
				break;
			case 4:
				sectionName = 'contact';
				break;
			default:
				sectionName = 'home';
				break;
		}

		if (!activeLinkName) {
			activeLinkName = sectionName;
		}
		/* Set slide anims per section */
		// if (sectionName !== 'home') {
		this.slideInSection('.' + sectionName, 'slide-' + sectionName);
		this.updateActiveLink('#' + activeLinkName + '-link');
		// }
		this.slideInHeader();
		this.setState({
			currentSection: sectionName
		});
	}
	renderNav() {
		const { currentSection, viewHeight, screenSize, orientation } = this.state;

		//Do not render nav on landing page
		if (currentSection !== 'home') {
			return (
				<Navbar
					height={viewHeight}
					size={screenSize}
					orientation={orientation}
					links={<Links size={screenSize} />}
				/>
			);
		}
	}
	renderContent() {
		const { viewHeight, viewWidth, screenSize, landscapeHeight, orientation } = this.state;
		const that = this;

		return (
			//Set options for fullpage.js
			<ReactFullPage
				licenseKey={'***REMOVED***'}
				anchors={[ 'anchor-1', 'anchor-2', 'anchor-3', 'anchor-4', 'anchor-5' ]}
				menu={true}
				scrollOverflow={true}
				onLeave={function(origin, destination, direction) {
					that.sectionScrolled(destination.index);
				}}
				responsiveHeight={landscapeHeight}
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullPage.Wrapper>
							<div id="home" className="section">
								<Home
									size={screenSize}
									height={viewHeight}
									width={viewWidth}
									fullpageApi={fullpageApi}
								/>
							</div>
							<div id="about" className="section">
								<About size={screenSize} height={viewHeight} width={viewWidth} />
							</div>
							<div id="skills" className="section">
								<Skills
									size={screenSize}
									height={viewHeight}
									width={viewWidth}
									orientation={orientation}
								/>
							</div>
							<div id="portfolio" className="section">
								<Portfolio size={screenSize} />
							</div>
							<div id="contact" className="section">
								<Contact size={screenSize} height={viewHeight} />
							</div>
						</ReactFullPage.Wrapper>
					);
				}}
			/>
		);
	}
	render() {
		return (
			<div>
				{this.renderNav()}
				{this.renderContent()}
			</div>
		);
	}
}

export default App;
