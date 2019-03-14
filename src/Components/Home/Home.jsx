import React from 'react';

const Home = props => {
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
