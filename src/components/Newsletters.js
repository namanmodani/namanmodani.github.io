import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';
import newslettersData from '../data/newslettersData.json'; // Import the JSON data

const Newsletters = () => {
  return (
    <div className="blog-container">
      <section className="section">
        <p>Newsletter recommendations coming soon.</p>
        {newslettersData.map((pick, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={pick.link} rel="noreferrer" target="_blank">
                  {pick.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </p>
              <p className="website">{pick.author}</p>
            </div>
            {index < newslettersData.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Newsletters;
