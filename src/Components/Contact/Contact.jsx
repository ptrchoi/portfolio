//Libraries
import React, { Component } from 'react';
import firebase from '/firebase';
import $ from 'jquery';

//Components
import Confetti from '../confetti/Confetti';
import Contactform from '../contactform/Contactform';

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			savedEmail: ''
		};
		this.handleForm = this.handleForm.bind(this);
	}
	handleForm(comments, email) {
		// Test for successful save to Firebase db
		let dataStored = new Promise((resolve, reject) => {
			firebase.firestore().collection('visitors').add({
				comments: comments,
				email: email
			});
			resolve(email);
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

		this.setState({
			savedEmail: email
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
					<div id="contactForm" className="contact slide-contact-left">
						<Contactform submitForm={this.handleForm} />
					</div>
					{/* <form id="contactForm" onSubmit={this.handleSubmit}>
						<label id="emailLabel" for="userEmail">
							LET'S CONNECT
						</label>
						<textarea
							id="userComments"
							name="comments"
							type="text"
							resize="none"
							wrap="hard"
							maxlength="240"
							value={this.state.comments}
							onChange={this.updateInput}
							placeholder="Your message (240 max chars)"
						/>
						<input
							id="userEmail"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.updateInput}
							placeholder="Your email"
							required
						/>
						<button id="submitButton" type="submit" value="Submit">
							submit
						</button>
					</form> */}
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
