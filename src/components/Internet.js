import React from 'react';
import '../styles/styles.css';
import internetData from '../data/internetData.json'; // Import the JSON data

const Internet = () => {
  return (
    <div className="blog-container blog-page list-page">
      <section className="section">
        <p className="section-title">Internet</p>
        {internetData.map((pick, index) => (
          <div key={index}>
            <div className="row">
              <p className="note">
                <a href={pick.link} rel="noreferrer" target="_blank">
                  {pick.title}
                </a>
              </p>
              <p className="website">{pick.author}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Internet;
