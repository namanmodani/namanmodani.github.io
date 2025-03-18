import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';  // Import the CSS file
import recsData from '../data/recsData.json'; // Import the JSON data
import writingData from '../data/writingData.json'; // Import the JSON data

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Lists section */}
      <section className="section">
        <p className="section-title">Lists</p>
        <div className="row">
          <p className="note">
            <a href="/#/bookmarks" rel="noreferrer" target="_self">
              Bookmarks <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </p>
        </div>
        
        <div className="row">
          <p className="note">
            <a href="/#/newsletters" rel="noreferrer" target="_self">
              Newsletters <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </p>
        </div>
      </section>
      
      <hr className="divider" />

      {/* Writing section */}
      <section className="section">
        <p className="section-title">Writing</p>
        {writingData.map((rec, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={rec.link} rel="noreferrer" target="_self">
                  {rec.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </p>
              <p className="website">{rec.author}</p>
            </div>
          </div>
        ))}
      </section>

      <hr className="divider" />

      {/* Recs section */}
      <section className="section">
        <p className="section-title">Recs</p>
        {recsData.map((rec, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={rec.link} rel="noreferrer" target="_self">
                  {rec.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </p>
              <p className="website">{rec.author}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
