import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
      <p>I'm passionate about shaping and shipping meaningful products.</p>
      <p>I spend my days learning. I'm curious about most things, especially product, engineering, philosophy, and finance. A big chunk of this learning happens at <a href="https://www.ucla.edu/" rel="noreferrer" target="_blank" className="link-underline">UCLA</a>.</p>
      <p>Lately, I've been focused on spending my time intentionally. I like to read, write, listen to old music, play poker, travel, and watch sports.</p>
      <p>I'm always up for a good conversation. Reach out to me at modani [dot] naman [at] gmail [dot] com.</p>

      <div style={{ marginTop: '22px' }}></div>

      <a href="https://www.linkedin.com/in/namanmodani" rel="noreferrer" target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href="https://github.com/namanmodani" rel="noreferrer" target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://twitter.com/namanmodani" rel="noreferrer" target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default Home;