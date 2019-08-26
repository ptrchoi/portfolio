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
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/markusspiske/Fa0pTKuoDVY')`,
      background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/markusspiske/Fa0pTKuoDVY')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    };

    let el = document.getElementById('homeSection');
    Object.assign(el.style, imageProperties);
  }
  render(props) {
    let { size, height, fullpageApi } = this.props;
    return (
      <div id="homeSection" className="home-wrapper" style={{ height: height }}>
        <button
          id="welcomeButton"
          className="btn"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <span id="buttonText">welcome</span>
        </button>
        <div className="blurEffect">
          <div className="confetti">
            <Confetti
              data={{
                confettiType: 'text',
                strArr: [
                  { text: 'Javascript' },
                  { text: 'React' },
                  { text: 'SCSS' },
                  { text: 'ES6' },
                  { text: 'CSS' },
                  { text: 'jQuery' },
                  { text: 'Design' },
                  { text: 'Creative' },
                  { text: 'HTML5' },
                  { text: 'Responsive' }
                ],
                screen: size,
                num: 8,
                color: 'primary',
                size: 'large',
                speed: 'medium'
              }}
            />
          </div>
        </div>
        <div className="confetti softBlur">
          <Confetti
            data={{
              confettiType: 'text',
              strArr: [
                { text: 'Javascript' },
                { text: 'React' },
                { text: 'SCSS' },
                { text: 'ES6' },
                { text: 'CSS' },
                { text: 'jQuery' },
                { text: 'Design' },
                { text: 'Creative' },
                { text: 'HTML5' },
                { text: 'Responsive' }
              ],
              screen: size,
              num: 10,
              color: 'primary',
              speed: 'medium',
              margins: true
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
