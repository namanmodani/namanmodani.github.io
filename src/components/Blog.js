import React from 'react';
import { Link } from 'react-router-dom';
import ExternalArrow from './ExternalArrow';
import '../styles/styles.css';  // Import the CSS file
import recsData from '../data/recsData.json'; // Import the JSON data
import writingData from '../data/writingData.json'; // Import the JSON data

const Blog = () => {
  return (
    <div className="blog-container blog-page">
      {/* Writing section */}
      <section className="section">
        <p className="section-title">Writing</p>
        {writingData.map((rec, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={rec.link} rel="noreferrer" target="_self">
                  {rec.title}<ExternalArrow />
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
                {rec.link.startsWith('/') ? (
                  <Link to={rec.link}>{rec.title}</Link>
                ) : (
                  <a href={rec.link} rel="noreferrer" target="_self">
                    {rec.title}<ExternalArrow />
                  </a>
                )}
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
