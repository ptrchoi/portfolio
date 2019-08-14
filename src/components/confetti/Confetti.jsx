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

//Local Functions
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
function getRandProps(color, speed) {
  let leftOffset = getRandInt(1, 7) * 10 + '%'; //10-80%
  let size = getRandFixed(1.6, 4.6) + 'rem';
  let animNum = String(getRandInt(1, 5));

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
    delay = getRandInt(-250, 350) + 's';
    duration = getRandInt(260, 360) + 's';
  } else if (speed === 'slow') {
    delay = getRandInt(-180, 180) + 's';
    duration = getRandInt(90, 180) + 's';
  } else if (speed === 'fast') {
    delay = getRandInt(-50, 50) + 's';
    duration = getRandInt(30, 50) + 's';
  }

  return {
    color: color,
    left: leftOffset,
    animationName: 'float' + animNum,
    animationDelay: delay,
    animationDuration: duration,
    animationIterationCount: 'infinite',
    fontSize: size,
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
    let { confettiType, strArr, num, color, speed } = this.props.data;
    let particleArr = generateParticleArray(strArr, num);

    if (confettiType === 'icon') {
      return particleArr.map(particle => {
        return (
          <span style={getRandProps(color, speed)}>
            <i className={particle} />
          </span>
        );
      });
    } else {
      return particleArr.map(particle => {
        return <span style={getRandProps(color, speed)}>{particle}</span>;
      });
    }
  }
}

export default Confetti;
