//Libraries
import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { projectId, title, image, website, firebase, codepen, description } = this.props.card;
		return (
			<div id={projectId} className="card">
				<div className="card-front">
					<img src={image} alt="thumbnail" />
				</div>
				<div className="card-back">
					<p className="card-title"> {title} </p>
					<hr className="card-divider" />
					<p className="card-text">{description}</p>
					<div className="card-links">
						{website.length > 0 && (
							<a href={website} target="_blank">
								<p className="link-title">
									Visit Website
									<i className="link-icon fas fa-external-link-square-alt" />
								</p>
							</a>
						)}
						{firebase.length > 0 && (
							<a href={website} target="_blank">
								<p className="link-title">
									Firebase Demo
									<i className="link-icon fas fa-external-link-square-alt" />
								</p>
							</a>
						)}
						{codepen.length > 0 && (
							<a href={codepen} target="_blank">
								<p className="link-title">
									CodePen Demo
									<i className="link-icon fas fa-external-link-square-alt" />
								</p>
							</a>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
