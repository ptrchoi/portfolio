//Libraries
import React from 'react';

import Card from '../card/Card';

/**
 * Functional React Component, renders a content section of "cards".
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Portfolio = props => {
  return (
    <div className="section-wrapper portfolio-wrapper">
      <Card
        projectId={'project-1'}
        title={'Project Landing Page'}
        image={'https://codepen.io/ptrchoi/pen/JayyOP/image/large.png'}
        link={'https://codepen.io/ptrchoi/pen/JayyOP'}
        description={'BACK of the card!'}
      />
      <Card
        projectId={'project-2'}
        title={'Calculator App'}
        image={'https://codepen.io/ptrchoi/pen/QJRpvQ/image/large.png'}
        link={'https://codepen.io/ptrchoi/pen/JayyOP'}
        description={'BACK of the card!'}
      />
      <Card
        projectId={'project-3'}
        title={'Drum Machine App'}
        image={'https://codepen.io/ptrchoi/pen/Xyrppy/image/large.png'}
        link={'https://codepen.io/ptrchoi/pen/JayyOP'}
        description={'BACK of the card!'}
      />
      <Card
        projectId={'project-4'}
        title={'Random Quote Generator'}
        image={'https://codepen.io/ptrchoi/pen/mQEMXv/image/large.png'}
        link={'https://codepen.io/ptrchoi/pen/JayyOP'}
        description={'BACK of the card!'}
      />
    </div>
  );
};

export default Portfolio;
