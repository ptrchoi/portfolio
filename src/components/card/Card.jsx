//Libraries
import React from 'react';

//Components
import Cardinfo from '../cardinfo/Cardinfo';

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
          <Cardinfo title={title} link={link} info={description} />
        </div>
      </div>
    </div>
  );
};

export default Card;
