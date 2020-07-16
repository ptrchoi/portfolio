//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height } for full screen background image, { fullpage_api } for moveSectionDown() method.
 * @return {JSX.Element} - Rendered component.
 */
class Home extends Component {
	render(props) {
		let { height, width, fullpageApi } = this.props;

		return (
			<div id="homeSection" className="home-wrapper" style={{ height: height, width: width }}>
				<div className="overlayText">
					<p>
						Hi, I'm <span id="name">Peter Choi</span>,
					</p>
					<p>UX developer & designer.</p>
					<button id="welcomeBtn" className="home slide-home" onClick={() => fullpageApi.moveSectionDown()}>
						Learn More
					</button>
				</div>
				<div className="confetti blur">
					<div className="confetti">
						<Confetti
							data={{
								confettiType: 'rounded-square',
								number: 100,
								color: 'home'
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
