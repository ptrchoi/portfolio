//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

//Assets
import profilePic1 from '../../assets/profile2.jpeg';
import profilePic2 from '../../assets/profile_color.jpeg';
import msftLogo from '../../assets/msftLogo_2096_771.png';
import msftStudiosLogo1 from '../../assets/msftStudios_2000_570.png';
import msftStudiosLogo2 from '../../assets/msftStudios_2000_570_blk.png';
import eaLogo from '../../assets/eaLogo_1280_505.png';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height }.
 * @return {JSX.Element} - Rendered component.
 */
class About extends Component {
	render(props) {
		let { size, height } = this.props;
		const classList = 'about-grid about-grid--' + size;

		return (
			<div style={{ height: height }} className="section-wrapper about-wrapper">
				<div className="section-header">
					<h1>About</h1>
				</div>
				<div className={classList}>
					<div className="about item-a">
						<img className="first-pic" src={profilePic1} alt="profile pic" />
						<img className="second-pic" src={profilePic2} alt="profile pic" />
					</div>
					<div className="about item-b">
						<p className="grid-text">
							Front-End Developer with a passion for creating elegant, intuitive, and delightful user
							experiences and solutions.
							<br />
							<br />
							Over 15 years of interactive and business software development experience at leading Fortune
							500 companies, including Microsoft and Electronic Arts.
						</p>
					</div>
					<div className="about item-c">
						<img className="grid-logo" src={msftLogo} alt="logo" />
					</div>
					<div className="about item-d">
						<img className="grid-logo" src={msftStudiosLogo1} alt="logo" />
						<img className="grid-logo logo-on-hover" src={msftStudiosLogo2} alt="logo" />
					</div>
					<div className="about item-e">
						<img className="grid-logo" src={eaLogo} alt="logo" />
					</div>
				</div>
				<div className="confetti blur">
					<Confetti
						data={{
							confettiType: 'square',
							number: 100,
							color: 'about'
						}}
					/>
				</div>
			</div>
		);
	}
}

export default About;
