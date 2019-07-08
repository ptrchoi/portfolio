import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    const { projectId, title, image, link, description } = this.props;
    return (
      <div className="card">
        <div
          id={projectId}
          className={
            this.state.active ? 'card-content card-flipped' : 'card-content'
          }
          onClick={this.toggleClass}
        >
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
  }
}

export default Card;
