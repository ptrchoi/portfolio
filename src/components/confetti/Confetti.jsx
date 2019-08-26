//Libraries
import React, { Component } from 'react';

//CONSTANTS
const PRIMARY_COLORS = [
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
const ICON_COLORS = ['rgb(110,110,110,.1)'];
const DARK_BG_COLORS = ['rgb(110,110,110)'];
const MARGINS = [1, 7];

//Local Functions
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
function getRandProps(color, speed, size, margins) {
  let animNum = String(getRandInt(1, 5));

  //Set size/scale if any specified
  let scale = getRandFixed(1.4, 3.8) + 'rem';

  if (size === 'small') {
    scale = getRandFixed(1.4, 2.2) + 'rem';
  } else if (size === 'large') {
    scale = getRandFixed(2.2, 3.8) + 'rem';
  }

  //Set offset & margins if any
  let leftOffset = getRandInt(1, 7) * 10 + '%'; //~10-70%

  if (margins) {
    leftOffset = MARGINS[getRandInt(0, 1)] * 10 + '%';
  }

  //Set color & shadow
  let colorArr = BG_COLORS;
  let shadow = '-1px -1px 2px rgb(27,70,100,.2)';

  if (color === 'primary') {
    colorArr = PRIMARY_COLORS;
  } else if (color === 'icon') {
    colorArr = ICON_COLORS;
    shadow = '0px 0px rgb(245,245,245,.3)';
  } else if (color === 'darkBG') {
    colorArr = DARK_BG_COLORS;
    shadow = '1px 1px rgb(245,245,245,.3)';
  }
  color = colorArr[getRandInt(0, colorArr.length - 1)];

  //Set speed
  let delay = getRandInt(-50, 50) + 's';
  let duration = getRandInt(60, 90) + 's';

  if (speed === 'slowest') {
    delay = getRandInt(-320, 320) + 's';
    duration = getRandInt(200, 320) + 's';
  } else if (speed === 'slow') {
    delay = getRandInt(-180, 180) + 's';
    duration = getRandInt(90, 180) + 's';
  } else if (speed === 'fast') {
    duration = getRandInt(30, 50) + 's';
  }

  return {
    color: color,
    left: leftOffset,
    animationName: 'float' + animNum,
    animationDelay: delay,
    animationDuration: duration,
    animationIterationCount: 'infinite',
    fontSize: scale,
    textShadow: shadow
  };
}
function generateParticleArray(strArr, num) {
  let newArr = [];

  for (let i = 0; i < num; i++) {
    strArr.map(str => {
      newArr.push(str.text);
    });
  }

  return newArr;
}

//Component
class Confetti extends Component {
  render(props) {
    let {
      confettiType,
      strArr,
      screen,
      num,
      color,
      speed,
      size,
      margins
    } = this.props.data;
    if (screen === 'small') {
      num = num / 2;
    }
    let particleArr = generateParticleArray(strArr, num);

    if (confettiType === 'icon') {
      return particleArr.map(particle => {
        return (
          <span style={getRandProps(color, speed, size, margins)}>
            <i className={particle} />
          </span>
        );
      });
    } else {
      return particleArr.map(particle => {
        return (
          <span style={getRandProps(color, speed, size, margins)}>
            {particle}
          </span>
        );
      });
    }
  }
}

export default Confetti;