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
      backgroundImage: `url('https://source.unsplash.com/user/markusspiske/jUWw_NEXjDw')`,
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
        <div className="button-wrapper">
          <button
            id="welcomeButton"
            onClick={() => fullpageApi.moveSectionDown()}
          >
            welcome
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
