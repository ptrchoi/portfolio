//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height }.
 * @return {JSX.Element} - Rendered component.
 */
class Contact extends Component {
	render(props) {
		let { size, height } = this.props;
		return (
			<div style={{ height: height }} className="section-wrapper contact-wrapper">
				<div className="content-layer">
					<div className="section-header">
						<h1>Contact</h1>
					</div>
					<div id="contactIcons" className="contact slide-contact-right">
						<i className="fab fa-codepen logo-icon" />
						<i className="fab fa-github logo-icon" />
						<i className="fab fa-free-code-camp logo-icon" />
						<i className="fab fa-linkedin logo-icon" />
					</div>
					<form id="contactForm" action="" className="contact slide-contact-left">
						<label id="emailLabel" for="userEmail">
							CONTACT
						</label>
						<input id="userEmail" type="email" placeholder="Enter your email" />
						<input id="submitButton" type="submit" value="Submit" />
					</form>
				</div>
				<div className="confetti blur">
					<Confetti
						data={{
							confettiType: 'circle',
							number: 50,
							color: 'contact'
						}}
					/>
				</div>
			</div>
		);
	}
}

export default Contact;
