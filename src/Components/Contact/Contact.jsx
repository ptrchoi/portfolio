//Libraries
import React, { Component } from 'react';
import firebase from '/firebase';

//Components
import Confetti from '../confetti/Confetti';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height }.
 * @return {JSX.Element} - Rendered component.
 */

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			comments: '',
			email: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}
	updateInput(e) {
		e.preventDefault();

		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		firebase.firestore().collection('visitors').add({
			comments: this.state.comments,
			email: this.state.email
		});

		// Reset state
		this.setState({
			comments: '',
			email: ''
		});
	}
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
					<form id="contactForm" onSubmit={this.handleSubmit} className="contact slide-contact-left">
						<label id="emailLabel" for="userEmail">
							CONTACT
						</label>
						<textarea
							id="userComments"
							name="comments"
							type="text"
							value={this.state.comments}
							onChange={this.updateInput}
							placeholder="Enter a brief message"
						/>
						<input
							id="userEmail"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.updateInput}
							placeholder="Enter your email"
						/>
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
