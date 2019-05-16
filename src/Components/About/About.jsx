import React, { Component } from 'react';

import profilePic from '../../assets/profile.jpg';
import msftLogo from '../../assets/msftLogo_2096_771.png';
import msftStudiosLogo from '../../assets/msftStudios_2000_570.png';
import eaLogo from '../../assets/eaLogo_1280_505.png';

/**
 * React Class Component, renders a page content element.
 * @function
 * @return {JSX.Element} - Rendered component.
 */
class About extends Component {
  render(props) {
    let { height } = this.props;
    return (
      <div style={{ height: height }} className="about-wrapper">
        <div id="profilePicWrapper" className="about-item">
          <img id="profilePic" src={profilePic} />
        </div>
        <div className="about-item">
          <p id="aboutText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            inventore similique veritatis excepturi perferendis quia quas.
            Cumque possimus dicta hic, nulla in dolorum dolore nostrum
            dignissimos vero totam cum ea! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quo minus provident soluta similique
            dolorem et sunt animi illo cum aut consectetur nihil dignissimos
            earum, eius suscipit non omnis alias reprehenderit? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quo saepe dolor
            laudantium dolorum odit. Magni quia impedit assumenda quis neque
            sequi nulla, sunt optio officiis eveniet deleniti est ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div id="logosWrapper" className="about-item">
          <img id="msftLogo" className="aboutLogo" src={msftLogo} />
          <img
            id="msftStudiosLogo"
            className="aboutLogo"
            src={msftStudiosLogo}
          />
          <img id="eaLogo" className="aboutLogo" src={eaLogo} />
        </div>
      </div>
    );
  }
}

export default About;
