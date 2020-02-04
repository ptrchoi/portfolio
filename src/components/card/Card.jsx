//Libraries
import React from 'react';

//Components
// import Cardinfo from '../cardinfo/Cardinfo';

const Card = (props) => {
	const { projectId, title, image, link, description } = props.card;
	return (
		<div id={projectId} className="card">
			<div className="card-front">
				<img src={image} alt="thumbnail" />
			</div>
			<div className="card-back">
				<p className="card-title"> {title} </p>
				<div className="card-divider" />
				<p className="card-text">{description}</p>
				<a href={link} target="_blank" className="disabled-link">
					<p className="link-title">
						CodePen Demo
						<i className="link-icon fas fa-external-link-square-alt" />
					</p>
				</a>
			</div>
		</div>
	);
};

export default Card;
