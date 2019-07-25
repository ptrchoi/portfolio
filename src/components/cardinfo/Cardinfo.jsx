//Libraries
import React from 'react';

const Cardinfo = props => {
  return (
    <div className="cardinfo">
      <p className="card-title"> {props.title} </p>
      <p>{props.info}</p>
      <a href={props.link} target="_blank">
        <span className="demo-link">Demo</span>
      </a>
    </div>
  );
};

export default Cardinfo;
