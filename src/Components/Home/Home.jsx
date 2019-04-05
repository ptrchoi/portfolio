import React, { Component } from 'react';
import $ from 'jquery';

const IMAGE_TRANSITION_TIME = 0.8; //s

/**
 * React Class Component, renders a page content element and fullpage background image.
 * @function
 * @return {JSX.Element} - Rendered component, with href link button.
 */
class Home extends Component {
  componentDidMount() {
    let url =
      'https://source.unsplash.com/user/markusspiske/jUWw_NEXjDw/1600x1200';
    let imageProperties = {
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      transition: `all ease-in-out ${IMAGE_TRANSITION_TIME}s`
    };

    let el = document.getElementById('home-section');
    Object.assign(el.style, imageProperties);
  }
  render(props) {
    let { height } = this.props;
    console.log('props passed in height: ', height);
    return (
      <div
        id="home-section"
        className="home-wrapper"
        style={{ height: height }}
      >
        <p>Home Component</p>

        <button
          className="welcomeButton"
          onClick={() => (window.location.href = '/#about')}
        >
          welcome
        </button>
      </div>
    );
  }
}

export default Home;
