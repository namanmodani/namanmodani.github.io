import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';
import picksData from '../data/picksData.json'; // Import the JSON data

const Picks = () => {
  return (
    <div className="blog-container">
      <section className="section">
        <p className="section-title">Internet Picks</p>
        {picksData.map((pick, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={pick.link} rel="noreferrer" target="_blank">
                  {pick.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </p>
              <p className="website">{pick.author}</p>
            </div>
            {index < picksData.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Picks;
