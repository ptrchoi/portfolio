//Libraries
import React, { Component } from 'react';

//Components
// import Cardinfo from '../cardinfo/Cardinfo';

class Card extends Component {
	constructor(props) {
		super(props);

		this.renderLink = this.renderLink.bind(this);
	}
	renderLink(link) {
		if (link.length > 0)
			return (
				<a href={link} target="_blank" className="disabled-link">
					<p className="link-title">
						CodePen Demo
						<i className="link-icon fas fa-external-link-square-alt" />
					</p>
				</a>
			);
	}
	render() {
		const { projectId, title, image, link, description } = this.props.card;
		return (
			<div id={projectId} className="card">
				<div className="card-front">
					<img src={image} alt="thumbnail" />
				</div>
				<div className="card-back">
					<p className="card-title"> {title} </p>
					<div className="card-divider" />
					<p className="card-text">{description}</p>
					{this.renderLink(link)}
				</div>
			</div>
		);
	}
}

export default Card;
