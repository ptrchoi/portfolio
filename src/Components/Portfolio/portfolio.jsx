//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

import Card from '../card/Card';

/**
 * Functional React Component, renders a content section of "cards".
 * @function
 * @return {JSX.Element} - Rendered component.
 */

const CARDS = [
  {
    projectId: 'project-1',
    title: 'Project Landing Page',
    image: 'https://codepen.io/ptrchoi/pen/JayyOP/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: 'BACK of the card!',
    active: false
  },
  {
    projectId: 'project-2',
    title: 'Calculator App',
    image: 'https://codepen.io/ptrchoi/pen/QJRpvQ/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: 'BACK of the card!',
    active: false
  },
  {
    projectId: 'project-3',
    title: 'Drum Machine App',
    image: 'https://codepen.io/ptrchoi/pen/Xyrppy/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: 'BACK of the card!',
    active: false
  },
  {
    projectId: 'project-4',
    title: 'Random Quote Generator',
    image: 'https://codepen.io/ptrchoi/pen/mQEMXv/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: 'BACK of the card!',
    active: false
  },
  {
    projectId: 'project-5',
    title: 'Technical Documentation',
    image: 'https://codepen.io/ptrchoi/pen/jvLoOQ/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: 'BACK of the card!',
    active: false
  },
  {
    projectId: 'project-6',
    title: 'Markdown Live Previewer',
    image: 'https://codepen.io/ptrchoi/pen/rqPKJV/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/JayyOP',
    description: 'BACK of the card!',
    active: false
  }
];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARDS
    };

    this.toggleCard = this.toggleCard.bind(this);
    // this.unflipOtherCards = this.unflipOtherCards.bind(this);
  }
  toggleCard(e) {
    let { cards } = this.state;
    let target = e.currentTarget.id;
    let el = document.getElementById(target);
    let index = cards.findIndex(i => i.projectId === target);
    let updatedCard = cards[index];
    let active = updatedCard.active;

    if (active) {
      updatedCard.active = false;
      // el.removeClass('card-flipped');
      el.className = 'card-content';
    } else {
      updatedCard.active = true;
      // el.addClass('card-flipped');
      el.className = 'card-content card-flipped';
    }
    cards[index] = updatedCard;
    this.setState({
      cards: cards
    });
  }
  render() {
    const card = this.state.cards;
    return (
      <div className="section-wrapper portfolio-wrapper">
        <Card card={card[0]} handleClick={this.toggleCard} />
        <Card card={card[1]} handleClick={this.toggleCard} />
        <Card card={card[2]} handleClick={this.toggleCard} />
        <Card card={card[3]} handleClick={this.toggleCard} />
        <Card card={card[4]} handleClick={this.toggleCard} />
        <Card card={card[5]} handleClick={this.toggleCard} />
      </div>
    );
  }
}

export default Portfolio;

// this.state.cards.forEach(function(el) {
//   // console.log('inside each()');
//   // console.log('el: ', el.projectId);
//   if (card.id === el.projectId) {
//     console.log('MATCH');
//     e.currentTarget.addClass('card-flipped');
//   }
// });

// if ($(this)[0].id === current) {
//   console.log('MATCH!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// } else {
//   console.log(
//     'NOO MATCH!, removing class - card-flipped from: ',
//     $(this)[0].id
//   );
//   $(this).removeClass('card-flipped');
//   $(this).setActive(true);
// }

// if (!active) {
//   console.log('unflipping');

//   $('.card-flipped').removeClass('card-flipped');
// this.unflipOtherCards();
// }
// if ($('.card-flipped')) {
//   $('.card-flipped').removeClass('card-flipped');
// }
// this.unflipOtherCards();

// this.setActive(active);
// setActive(status) {
//   console.log(
//     'setActive: this: ',
//     this.props.projectId,
//     ' from status: ',
//     status
//   );
//   this.setState({ active: !status });
// }
// unflipOtherCards(current) {
//   console.log('unflipping');

//   $('.card-flipped').each(function() {
//     console.log('inside each()');
//     console.log('$(this)[0].id: ', $(this)[0].id);
//     console.log('current: ', current);
//     if ($(this)[0].id === current) {
//       console.log('MATCH!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//     } else {
//       console.log(
//         'NOO MATCH!, removing class - card-flipped from: ',
//         $(this)[0].id
//       );
//       $(this).removeClass('card-flipped');
//       $(this).setActive(true);
//     }
//   });
// }
