//Libraries
import React from 'react';

//Components
import Cardinfo from '../cardinfo/Cardinfo';

const Card = props => {
  const { projectId, title, image, link, description } = props.card;
  return (
    <div id={projectId} onClick={props.handleClick} className="card">
      <div className="card-front">
        <img src={image} alt="thumbnail" />
      </div>
      <div className="card-back">
        <Cardinfo title={title} link={link} info={description} />
      </div>
    </div>
  );
};

export default Card;
