import React from 'react';

const Card = props => {
  const { projectId, title, image, link, description } = props.card;
  return (
    <div className="card">
      <div id={projectId} onClick={props.handleClick} className="card-content">
        <div className="card-content--front">
          <img src={image} alt="thumbnail" />
          <div>
            <p>{title}</p>
          </div>
        </div>
        <div className="card-content--back">
          <a href={link} target="_blank">
            <p>{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
