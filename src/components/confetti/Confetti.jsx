//Libraries
import React, { Component } from 'react';

//CONSTANTS
const CONFETTI_TEXT = [
  {
    text: 'Javascript'
  },
  {
    text: 'React'
  },
  {
    text: 'SCSS'
  },
  {
    text: 'ES6'
  },
  {
    text: 'CSS'
  },
  {
    text: 'jQuery'
  },
  {
    text: 'Design'
  },
  {
    text: 'Creative'
  },
  {
    text: 'HTML5'
  },
  {
    text: 'Responsive'
  },
  {
    text: 'Javascript'
  },
  {
    text: 'React'
  },
  {
    text: 'SCSS'
  },
  {
    text: 'ES6'
  },
  {
    text: 'CSS'
  },
  {
    text: 'jQuery'
  },
  {
    text: 'Design'
  },
  {
    text: 'Creative'
  },
  {
    text: 'HTML5'
  },
  {
    text: 'Responsive'
  }
];
const CONFETTI_CROSS = [
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  },
  {
    text: '+'
  }
];
const CONFETTI_ABOUT_ICON = [
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  },
  {
    text: 'fas fa-address-card'
  },
  {
    text: 'fab fa-microsoft'
  },
  {
    text: 'fab fa-xbox'
  }
];
const CONFETTI_ABOUT_TEXT = [
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  },
  {
    text: 'EA'
  }
];
const CONFETTI_SKILLS = [
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  },
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  },
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  },
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  },
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  },
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  },
  {
    text: 'fab fa-react'
  },
  {
    text: 'fab fa-js-square'
  },
  {
    text: 'fab fa-sass'
  },
  {
    text: 'fab fa-html5'
  }
];
const CONFETTI_PORTFOLIO = [
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  },
  {
    text: 'fab fa-codepen'
  },
  {
    text: 'far fa-file-code'
  },
  {
    text: 'fab fa-free-code-camp'
  }
];

const CONFETTI_STARS = [
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  },
  {
    text: 'far fa-star'
  }
];
const HOME_COLORS = [
  'rgb(255,255,255)',
  'rgb(27,147,39)',
  'rgb(27,147,39,.7)',
  'rgb(77,14,21)',
  'rgb(255,255,255)',
  'rgb(255,255,255,.5)',
  'rgb(77,14,21,.7)',
  'rgb(57,129,193)',
  'rgb(57,129,193,.7)',
  'rgb(221,255,0)',
  'rgb(255,255,255)',
  'rgb(255,255,255,.7)',
  'rgb(221,255,0,.7)',
  'rgb(255,255,255)',
  'rgb(255,255,255,.7)'
];
const BG_COLORS = ['rgb(245,245,245)'];
// const BG_COLORS = [
//   'rgb(27,70,100,.2)',
//   'rgb(27,70,100,.3)',
//   'rgb(27,70,100,.4)',
//   'rgb(27,70,100,.5)'
// ];
// const BG_COLORS = ['rgb(255,255,255)', 'rgb(255,255,255,.7)'];

//Local Functions
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
function getRandProps(caller) {
  let colorSet = BG_COLORS;

  if (caller === 'home') {
    colorSet = HOME_COLORS;
  }

  let color = colorSet[getRandInt(0, colorSet.length - 1)];
  let leftOffset = getRandInt(1, 7) * 10 + '%'; //10-80%
  let delay = getRandInt(-15, 15) + 's';
  let duration = getRandInt(10, 40) + 's';
  // let size = getRandFixed(0.6, 2.6) + 'rem';
  let size = getRandFixed(1.6, 4.6) + 'rem';
  let animNum = String(getRandInt(1, 5));

  let confettiProps = {
    color: color,
    left: leftOffset,
    animationName: 'float' + animNum,
    animationDelay: delay,
    animationDuration: duration,
    animationIterationCount: 'infinite',
    fontSize: size,
    textShadow: '-2px -2px rgb(27,70,100,.15)'
  };
  // console.log('confettiProps: ', confettiProps);

  return confettiProps;
}

//Component
class Confetti extends Component {
  render() {
    const { caller } = this.props;
    if (caller === 'home') {
      return CONFETTI_TEXT.map(particle => {
        return <span style={getRandProps(caller)}>{particle.text}</span>;
      });
    } else if (caller === 'about1') {
      return CONFETTI_ABOUT_ICON.map(particle => {
        return (
          <span style={getRandProps(this.props.caller)}>
            <i className={particle.text} />
          </span>
        );
      });
    } else if (caller === 'about2') {
      return CONFETTI_ABOUT_TEXT.map(particle => {
        return (
          <span style={getRandProps(this.props.caller)}>{particle.text}</span>
        );
      });
    } else if (caller === 'skills') {
      return CONFETTI_SKILLS.map(particle => {
        return (
          <span style={getRandProps(this.props.caller)}>
            <i className={particle.text} />
          </span>
        );
      });
    } else if (caller === 'portfolio') {
      return CONFETTI_PORTFOLIO.map(particle => {
        return (
          <span style={getRandProps(this.props.caller)}>
            <i className={particle.text} />
          </span>
        );
      });
    } else {
      return CONFETTI_STARS.map(particle => {
        return (
          <span style={getRandProps(this.props.caller)}>
            <i className={particle.text} />
          </span>
        );
      });
    }
  }
}

export default Confetti;
