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
				$('formWrapper').addClass('element-off');
				setTimeout(() => {
					$('#notificationMsg').removeClass('element-off');
					$('#notificationMsg').addClass('element-on');
				}, 350); // Sync with Contactform fade-out anim (.25s)
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
						<a href="https://www.linkedin.com/in/peter-choi" target="_blank"><i className="fab fa-linkedin logo-icon" /></a>
						<a href="https://github.com/ptrchoi?tab=repositories" target="_blank"><i className="fab fa-github logo-icon" /></a>
						<a href="https://www.freecodecamp.org/ptrchoi" target="_blank"><i className="fab fa-free-code-camp logo-icon" /></a>
					</div>
					<div id="notificationMsg" className="element-off">
						<span>
							Thanks for visiting <span id="savedEmail">{this.state.savedEmail}</span>!
						</span>
					</div>
					<div id="formWrapper" className="contact slide-contact-left">
						<Contactform submitForm={this.handleForm} />
					</div>
				</div>
				<div className="confetti blur">
					<Confetti
						data={{
							confettiType: 'circle',
							number: 130,
							color: 'contact'
						}}
					/>
				</div>
			</div>
		);
	}
}

export default Contact;
