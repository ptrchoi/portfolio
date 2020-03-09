//Libraries
import React, { Component } from 'react';
import firebase from '/firebase';
import $ from 'jquery';

//Components
import Confetti from '../confetti/Confetti';

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			savedEmail: '',
			comments: '',
			email: ''
		};
		this.updateInput = this.updateInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	updateInput(e) {
		e.preventDefault();

		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		// Test for successful save to Firebase db
		let dataStored = new Promise((resolve, reject) => {
			firebase.firestore().collection('visitors').add({
				comments: this.state.comments,
				email: this.state.email
			});
			resolve(this.state.email);
		});

		dataStored
			.then(function() {
				$('#notificationMsg').removeClass('element-off');
				$('#notificationMsg').addClass('element-on');
				$('#contactForm').addClass('element-off');
			})
			.catch((reason) => {
				// State will be reset below
				console.log('Data storage rejected promise because: ' + reason);
			});

		// Reset state
		this.setState({
			savedEmail: this.state.email,
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
					<div id="notificationMsg" className="element-off">
						<span>
							Thanks for visiting <span id="savedEmail">{this.state.savedEmail}</span>!
						</span>
					</div>
					<form id="contactForm" onSubmit={this.handleSubmit} className="contact slide-contact-left">
						<label id="emailLabel" for="userEmail">
							LET'S CONNECT
						</label>
						<textarea
							id="userComments"
							name="comments"
							type="text"
							value={this.state.comments}
							onChange={this.updateInput}
							placeholder="Your message"
						/>
						<input
							id="userEmail"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.updateInput}
							placeholder="Your email"
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
