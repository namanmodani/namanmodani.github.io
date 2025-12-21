import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <p>I shape products and spend time thinking about how people actually use them.</p>
      <p>I grew up in Gurgaon, studied computer science at UCLA, and now call San Francisco home. I'm a fan of Porsche, Dostoyevsky, the San Antonio Spurs, road trips, and good conversation.</p>
      <p>Generally optimistic, selectively skeptical, and rarely surprised by edge cases.</p>
      <div style={{ marginTop: '22px' }}></div>

      <a href="mailto:modani.naman@gmail.com" rel="noreferrer" target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a href="https://www.linkedin.com/in/namanmodani" rel="noreferrer" target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href="https://github.com/namanmodani" rel="noreferrer" target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>

    </div>
  );
};

export default Home;
