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
        <div className="frostedOverlay">
          <div className="confetti blur-inner">
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
                num: 7,
                color: 'primary',
                speed: 'medium',
                margins: 'inner'
              }}
            />
          </div>
        </div>
        <div className="overlayText">
          <p>Hi, I'm <span id="name">Peter Choi</span>,</p>
          <p>web developer & designer.</p>
          <button
            id="innerButton"
            onClick={() => fullpageApi.moveSectionDown()}>Learn More</button>
        </div>
        <div className="confetti blur-outer">
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
              speed: 'medium',
              margins: 'outer'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
