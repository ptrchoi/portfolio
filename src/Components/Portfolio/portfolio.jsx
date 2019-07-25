//Libraries
import React, { Component } from 'react';

//Components
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
    description:
      'Pure JS & CSS demonstrating a responsive product page, with: Nested flex box and grid layouts | Modal nav menus and image gallery',
    flipped: false
  },
  {
    projectId: 'project-2',
    title: 'Calculator App',
    image: 'https://codepen.io/ptrchoi/pen/QJRpvQ/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/QJRpvQ',
    description: 'Click to check it out on Codepen',
    flipped: false
  },
  {
    projectId: 'project-3',
    title: 'Drum Machine App',
    image: 'https://codepen.io/ptrchoi/pen/Xyrppy/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/Xyrppy',
    description: 'Click to check it out on Codepen',
    flipped: false
  },
  {
    projectId: 'project-4',
    title: 'Random Quote Generator',
    image: 'https://codepen.io/ptrchoi/pen/mQEMXv/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/mQEMXv',
    description: 'Click to check it out on Codepen',
    flipped: false
  },
  {
    projectId: 'project-5',
    title: 'Technical Documentation',
    image: 'https://codepen.io/ptrchoi/pen/jvLoOQ/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/jvLoOQ',
    description: 'Click to check it out on Codepen',
    flipped: false
  },
  {
    projectId: 'project-6',
    title: 'Markdown Live Previewer',
    image: 'https://codepen.io/ptrchoi/pen/rqPKJV/image/large.png',
    link: 'https://codepen.io/ptrchoi/pen/rqPKJV',
    description: 'Click to check it out on Codepen',
    flipped: false
  }
];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARDS
    };

    this.updateCards = this.updateCards.bind(this);
  }
  updateCards(e) {
    let { cards } = this.state;
    let index = cards.findIndex(i => i.projectId === e.currentTarget.id);
    let isFlipped = cards[index].flipped; //Flipped state of currently clicked card
    let alreadyFlippedIndex = cards.findIndex(i => i.flipped === true); //Check for already flipped cards

    //Flip any already flipped card first
    if (alreadyFlippedIndex > -1 && alreadyFlippedIndex !== index) {
      cards = this.toggleCard(cards, alreadyFlippedIndex, true);
    }

    //Toggle current card
    cards = this.toggleCard(cards, index, isFlipped);

    this.setState({
      cards: cards
    });
  }
  toggleCard(cards, i, flipped) {
    let card = cards[i];

    if (flipped) {
      // .addClass & .removeClass not working ('not a function') - NEED TO FIX!
      // document.getElementById(card.projectId).removeClass('card-flipped');
      document.getElementById(card.projectId).className = 'card-content';
    } else {
      // document.getElementById(card.projectId).addClass('card-flipped');
      document.getElementById(card.projectId).className =
        'card-content card-flipped';
    }
    card.flipped = !flipped;
    cards[i] = card;

    return cards;
  }
  render() {
    const card = this.state.cards;
    return (
      <div className="section-wrapper portfolio-wrapper">
        <Card card={card[0]} handleClick={this.updateCards} />
        <Card card={card[1]} handleClick={this.updateCards} />
        <Card card={card[2]} handleClick={this.updateCards} />
        <Card card={card[3]} handleClick={this.updateCards} />
        <Card card={card[4]} handleClick={this.updateCards} />
        <Card card={card[5]} handleClick={this.updateCards} />
      </div>
    );
  }
}

export default Portfolio;
