import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
      <p>I'm passionate about shaping and shipping meaningful products.</p>
      <p>I'm curious about most things, especially product, engineering, and philosophy. A big chunk of my learning happens at <a href="https://www.ucla.edu/" rel="noreferrer" target="_blank" className="link-underline">UCLA</a>.</p>
      <p>I split my time between LA and SF, depending on where life, work, and good people take me. Lately, I've been learning how to (1) spend my time intentionally and (2) build agentic AI.</p>
      <p>I enjoy reading, writing, poker, travel, sports, and good conversation. If you're up for one, reach out to me at modani [dot] naman [at] gmail [dot] com.</p>

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