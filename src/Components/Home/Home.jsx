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
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/bruno_nascimento/9XTyIiFceKM')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/flysi3000/eMnddgd3pjQ')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/photohunter/hupwsQVetkA')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/pawel_czerwinski/9Lw6YZjRmlk')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/eli_from_prague/p26i1bluBNM')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/ableeker66/slpTDuenYeM')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/steve_j/eVaxJVA2zHI')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/jannerboy62/nbwmNehHvis')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/_peterclarkson_/E5Z38Adu8y8')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/sickhews/B7fN6gS0vIk')`,
      background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/buitor/lQzyD1ndek8')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/christopher_burns/Kj2SaNHG-hg')`,
      // background: `linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.85)),url('https://source.unsplash.com/user/agkdesign/c4Fvlp63yAQ')`,
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
        {/* <div className="frostedOverlay"> */}
        {/* <div className="confetti blur-inner">
          <Confetti
            data={{
              confettiType: 'shape',
              strArr: [
                { text: 'fas fa-circle' }
              ],
              screen: size,
              num: 40,
              color: 'lights',
              speed: 'slow'
            }}
          /> */}
        {/* <Confetti
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
            /> */}
        {/* </div> */}
        {/* </div> */}
        <div className="overlayText">
          <p>Hi, I'm <span id="name">Peter Choi</span>,</p>
          <p>web developer & designer.</p>
          <button
            id="innerButton"
            onClick={() => fullpageApi.moveSectionDown()}>Learn More</button>
        </div>
        <div className="confetti blur-inner">
          <div className="confetti">
            <Confetti
              data={{
                confettiType: 'shape',
                strArr: [
                  { text: 'fas fa-circle' }
                ],
                screen: size,
                num: 40,
                color: 'lights',
                speed: 'slow'
              }}
            />
          </div>
          {/* <Confetti
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
          /> */}
        </div>
      </div>
    );
  }
}

export default Home;
