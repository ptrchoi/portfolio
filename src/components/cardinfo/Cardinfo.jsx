//Libraries
import React from 'react';

const Cardinfo = props => {
  return (
    <div className="cardinfo">
      <p className="card-title"> {props.title} </p>
      <p className="card-text">{props.info}</p>
      <a href={props.link} target="_blank">
        <p>
          CodePen Demo
          <i className="link-icon fas fa-external-link-square-alt" />
        </p>
      </a>
    </div>
  );
};

export default Cardinfo;
