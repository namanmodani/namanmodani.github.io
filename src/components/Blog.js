import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';  // Import the CSS file
import picksData from '../data/picksData.json'; // Import the JSON data
import recsData from '../data/recsData.json'; // Import the JSON data

const Blog = () => {
  const firstFivePicks = picksData.slice(0, 5); // Get the first 5 items from picksData

  return (
    <div className="blog-container">
      <section className="section">
        <p className="section-title">
          <a href="/#/picks" rel="noreferrer">
            Bookmarks <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
        </p>
        {firstFivePicks.map((pick, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={pick.link} rel="noreferrer" target="_blank">
                  {pick.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </p>
              <p className="website">{pick.author}</p>
            </div>
            {index < firstFivePicks.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </section>

      <section className="section">
        <p className="section-title">Field Notes</p>
        <div className="row">
          <p className="temp-note">This section is a WIP. Let me cook 🧑‍🍳</p>
        </div>
      </section>

      <section className="section">
        <p className="section-title">Recs</p>
        {recsData.map((rec, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={rec.link} rel="noreferrer" target="_blank">
                  {rec.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </p>
              <p className="website">{rec.author}</p>
            </div>
            {index < recsData.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
