import React from 'react';

const Home = () => {
  return (
    <div>
      <p>I shape products and spend time thinking about how people actually use them.</p>
      <p>I grew up in Gurgaon, studied computer science at UCLA, and now call San Francisco home. I'm a fan of Porsche, Dostoyevsky, the San Antonio Spurs, road trips, and good conversation.</p>
      <p>Generally optimistic, selectively skeptical, and rarely surprised by edge cases.</p>

      <div className="contact-links">
        <a href="mailto:modani.naman@gmail.com" rel="noreferrer" target="_blank">Email</a>
        <span className="separator">/</span>
        <a href="https://www.linkedin.com/in/namanmodani" rel="noreferrer" target="_blank">LinkedIn</a>
        <span className="separator">/</span>
        <a href="https://github.com/namanmodani" rel="noreferrer" target="_blank">GitHub</a>
      </div>
    </div>
  );
};

export default Home;
