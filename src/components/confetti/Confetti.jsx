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
const DARK_BG_COLORS = ['rgb(106,106,106)'];

//Local Functions
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
function getRandProps(color) {
  let leftOffset = getRandInt(1, 7) * 10 + '%'; //10-80%
  let delay = getRandInt(-45, 50) + 's';
  let duration = getRandInt(30, 50) + 's';
  let size = getRandFixed(1.6, 4.6) + 'rem';
  let animNum = String(getRandInt(1, 5));
  let colorArr = BG_COLORS;
  let shadow = '-1px -1px 2px rgb(27,70,100,.2)';

  if (color === 'primary') {
    colorArr = PRIMARY_COLORS;
  } else if (color === 'darkBG') {
    colorArr = DARK_BG_COLORS;
    shadow = '-2px -2px rgb(245,245,245,.3)';
  }
  color = colorArr[getRandInt(0, colorArr.length - 1)];

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
    let { confetti, strArr, num, color } = this.props.data;
    let particleArr = generateParticleArray(strArr, num);

    if (confetti === 'icon') {
      return particleArr.map(particle => {
        return (
          <span style={getRandProps(color)}>
            <i className={particle} />
          </span>
        );
      });
    } else {
      return particleArr.map(particle => {
        return <span style={getRandProps(color)}>{particle}</span>;
      });
    }
  }
}

export default Confetti;
