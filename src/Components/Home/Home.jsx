import React from 'react';

/**
 * Functional React component, simply renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
const Home = () => {
  return (
    <div className="sectionWrapper">
      <p>Home Component</p>
      <button
        className="welcomeButton"
        onClick={() => console.log('welcome button pressed!')}
      >
        welcome
      </button>
    </div>
  );
};

export default Home;
