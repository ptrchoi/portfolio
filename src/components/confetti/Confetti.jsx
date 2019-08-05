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
  }
];
const CONFETTI_COLORS = [
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

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandFixed(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
function getRandProps() {
  let color = CONFETTI_COLORS[getRandInt(0, 14)];
  let indent = getRandInt(1, 8) * 10 + '%'; //10-80%
  let delay = getRandInt(-10, 10) + 's';
  let duration = getRandInt(12, 25) + 's';
  let size = getRandFixed(0.7, 2.4) + 'rem';

  let confettiProps = {
    color: color,
    left: indent,
    animationDelay: delay,
    animationDuration: duration,
    fontSize: size
  };
  // console.log('confettiProps: ', confettiProps);

  return confettiProps;
}

class Confetti extends Component {
  render() {
    return CONFETTI_TEXT.map(particle => {
      return <span style={getRandProps()}>{particle.text}</span>;
    });
  }
}

export default Confetti;
