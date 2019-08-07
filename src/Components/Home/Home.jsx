//Libraries
import React, { Component } from 'react';

//Components
import Confetti from '../confetti/Confetti';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height } for full screen background image, { fullpage_api } for moveSectionDown() method.
 * @return {JSX.Element} - Rendered component.
 */
class Home extends Component {
  componentDidMount() {
    let imageProperties = {
      background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/markusspiske/jUWw_NEXjDw')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    };

    let el = document.getElementById('homeSection');
    Object.assign(el.style, imageProperties);
  }
  render(props) {
    let { height, fullpageApi } = this.props;
    return (
      <div id="homeSection" className="home-wrapper" style={{ height: height }}>
        <button
          id="welcomeButton"
          className="btn"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <span>
            <i id="buttonIcon" className="fas fa-angle-double-down" />
          </span>
          <span id="buttonText">welcome</span>
        </button>
        <div className="confetti">
          <Confetti caller={'home'} />
        </div>
      </div>
    );
  }
}

export default Home;
