import React, { Component } from 'react';

/**
 * React Class Component, renders a page content element and fullpage background image.
 * @function
 * @return {JSX.Element} - Rendered component, with href link button.
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
    let { height } = this.props;
    return (
      <div
        id="home-section"
        className="home-wrapper"
        style={{ height: height }}
      >
        <div className="button-wrapper">
          <button
            className="welcomeButton"
            onClick={() => (window.location.href = '/#about')}
          >
            welcome
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
