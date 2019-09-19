//Libraries
import React, { Component } from 'react';

//CONSTANTS
// const LIGHTS_COLORS = ['rgb(79,58,31)', 'rgb(52,52,47)', 'rgb(94,94,43)', 'rgb(235,249,245)', 'rgb(255,255,255)'];
// const LIGHTS_COLORS = ['rgba(44,102,88,.25)', 'rgba(100,249,251,.25)', 'rgba(198,206,251,.25)', 'rgba(25,85,149,.25)', 'rgba(255,255,255,.25)'];
const HOME_COLORS = ['rgba(142,213,237,.3)', 'rgba(219,240,251,.3)', 'rgba(208,234,248,.3)', 'rgba(255,255,255,.3)', 'rgba(251,227,69,.3)', 'rgba(255,240,193,.3)', 'rgba(134,168,235,.3)'];
const ABOUT_COLORS = ['rgba(232, 232, 232, 1)', 'rgba(0, 0, 0, .2)', 'rgba(216, 232, 237, .7)', 'rgba(216, 232, 237, 1)', 'rgba(174, 211, 222,.6)'];
const SKILLS_COLORS = ['rgba(255, 255, 255, 1)', 'rgba(216, 232, 237, .5)', 'rgba(216, 232, 237, 1)'];
const CONTACT_COLORS = ['rgba(255, 255, 255, .1)', 'rgba(255, 255, 255, .4)', 'rgba(216, 232, 237, .2)', 'rgba(216, 232, 237, .4)', 'rgba(216, 232, 237, .7)'];

//LOCAL FUNCTIONS
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
function getRandProps(confettiType, color) {
  let colorSet = HOME_COLORS[getRandInt(0, HOME_COLORS.length - 1)];
  let leftOffset = getRandInt(1, 7) * 10 + '%'; //~10-70%
  let delay = getRandInt(-120, 120) + 's';
  let duration = getRandInt(50, 120) + 's';
  let animNum = String(getRandInt(1, 5));
  let side = getRandFixed(2, 5) + 'vw';
  let shape = '0.8vw';

  if (confettiType === 'circle') {
    shape = '4vw';
  }

  if (color === 'about') {
    colorSet = ABOUT_COLORS[getRandInt(0, ABOUT_COLORS.length - 1)];
  } else if (color === 'skills') {
    colorSet = SKILLS_COLORS[getRandInt(0, SKILLS_COLORS.length - 1)];
  } else if (color === 'contact') {
    colorSet = CONTACT_COLORS[getRandInt(0, CONTACT_COLORS.length - 1)];
  }


  return {
    backgroundColor: colorSet,
    left: leftOffset,
    animationName: 'float' + animNum,
    animationDelay: delay,
    animationDuration: duration,
    animationIterationCount: 'infinite',
    width: side,
    height: side,
    borderRadius: shape
  };
}
function createArray(count) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  return arr;
}
//Component
class Confetti extends Component {
  render(props) {
    let {
      confettiType,
      number,
      color
    } = this.props.data;

    let arr = createArray(number);

    return arr.map(el => {
      return (
        <span style={getRandProps(confettiType, color)}></span>
      );
    });
  }
}

export default Confetti;

  //   return particleArr.map(particle => {
  //     return (
  //       <span style={getRandProps(color, speed, screen)}>
  //         <i className={particle} />
  //       </span>
  //     );
  //   });

  // function getRandProps(color, speed, margins, screen) {
  //   let animNum = String(getRandInt(1, 5));

  //   //Set scale based on screen size
  //   let scale = getRandFixed(1.4, 3.8) + 'rem';
  //   if (screen === 'small') {
  //     scale = getRandFixed(0.8, 1.8) + 'rem';
  //   }

  //   //Set offset & margins if any
  //   let leftOffset = getRandInt(1, 7) * 10 + '%'; //~10-70%
  //   if (margins === 'outer') {
  //     leftOffset = MARGINS_OUTER[getRandInt(0, 1)] * 10 + '%';
  //   } else if (margins === 'inner') {
  //     leftOffset = MARGINS_INNER[getRandInt(0, 2)] * 10 + '%';
  //   }

  //   //Set color & shadow
  //   let colorArr = BG_COLORS;
  //   let shadow = '-1px -1px 2px rgb(27,70,100,.2)';

  //   if (color === 'primary') {
  //     colorArr = PRIMARY_COLORS;
  //   } else if (color === 'icon') {
  //     colorArr = ICON_COLORS;
  //     shadow = '0px 0px rgb(245,245,245,.3)';
  //   } else if (color === 'darkBG') {
  //     colorArr = DARK_BG_COLORS;
  //     shadow = '1px 1px rgb(245,245,245,.3)';
  //   } else if (color === 'lights') {
  //     colorArr = LIGHTS_COLORS;
  //   }
  //   color = colorArr[getRandInt(0, colorArr.length - 1)];

  //   //Set speed
  //   // let delay = getRandInt(-50, 50) + 's';
  //   // let duration = getRandInt(60, 90) + 's';

  //   // if (speed === 'slowest') {
  //   //   delay = getRandInt(-320, 320) + 's';
  //   //   duration = getRandInt(200, 320) + 's';
  //   // } else if (speed === 'slow') {
  //   //   delay = getRandInt(-180, 180) + 's';
  //   //   duration = getRandInt(90, 180) + 's';
  //   // } else if (speed === 'fast') {
  //   //   duration = getRandInt(30, 50) + 's';
  //   // }
  //   let delay = getRandInt(-90, 90) + 's';
  //   let duration = getRandInt(60, 100) + 's';

  //   return {
  //     color: color,
  //     left: leftOffset,
  //     animationName: 'float' + animNum,
  //     animationDelay: delay,
  //     animationDuration: duration,
  //     animationIterationCount: 'infinite',
  //     fontSize: scale,
  //     textShadow: shadow
  //   };
  // }
  // function generateParticleArray(strArr, num) {
  //   let newArr = [];

  //   for (let i = 0; i < num; i++) {
  //     strArr.map(str => {
  //       newArr.push(str.text);
  //     });
  //   }

  //   return newArr;
  // }

  // let particleArr = generateParticleArray(strArr, num);

  // if (confettiType === 'stick') {
  //   return particleArr.map(particle => {
  //     return (
  //       <span style={getRandProps(color, speed, screen)}>
  //         <i className={particle} />
  //       </span>
  //     );
  //   });
  // }