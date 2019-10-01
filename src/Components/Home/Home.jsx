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
	componentDidMount() {
		let imageProperties = {
			background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/buitor/lQzyD1ndek8')`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover'
		};

		let el = document.getElementById('homeSection');
		Object.assign(el.style, imageProperties);
	}
	render(props) {
		let { height, fullpageApi } = this.props;

		return (
			<div id="homeSection" className="home-wrapper" style={{ height: height }}>
				<div className="overlayText">
					<p>
						Hi, I'm <span id="name">Peter Choi</span>,
					</p>
					<p>web developer & designer.</p>
					<button id="welcomeBtn" onClick={() => fullpageApi.moveSectionDown()}>
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
