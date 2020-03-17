//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

class Contactform extends Component {
	constructor() {
		super();

		this.state = {
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

		let { comments, email } = this.state;
		$('#contactForm').addClass('fade-out');

		// Pass data back to Contacts component
		this.props.submitForm(comments, email);

		// Reset state
		this.setState({
			comments: '',
			email: ''
		});
	}
	render(props) {
		return (
			<div>
				<form id="contactForm" onSubmit={this.handleSubmit}>
					<label id="emailLabel" for="userEmail">
						LET'S CONNECT
					</label>
					<textarea
						id="userComments"
						name="comments"
						type="text"
						resize="none"
						wrap="hard"
						maxlength="220"
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
						required
					/>
					<button id="submitButton" type="submit" value="Submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Contactform;
