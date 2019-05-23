//Libraries
import React, { Component } from 'react';

/**
 * React Class Component, renders a content section.
 * @function
 * @param {object} props - { height } for full screen background image, { fullpage_api } for moveSectionDown() method.
 * @return {JSX.Element} - Rendered component.
 */
class Home extends Component {
  componentDidMount() {
    let imageProperties = {
      backgroundImage: `url('https://source.unsplash.com/user/markusspiske/jUWw_NEXjDw/1600x1200')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed'
    };

    let el = document.getElementById('home-section');
    Object.assign(el.style, imageProperties);
  }
  render(props) {
    let { height, fullpage_api } = this.props;
    return (
      <div
        id="home-section"
        className="home-wrapper"
        style={{ height: height }}
      >
        <div className="button-wrapper">
          <button
            className="welcomeButton"
            onClick={() => fullpage_api.moveSectionDown()}
          >
            welcome
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
