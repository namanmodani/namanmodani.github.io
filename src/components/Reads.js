import React from 'react';
import '../styles/styles.css';
import readsData from '../data/readsData.json'; // Import the JSON data

const Reads = () => {
  return (
    <div className="blog-container blog-page list-page">
      <section className="section">
        <p className="section-title">Reads</p>
        {readsData.map((pick, index) => (
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

export default Reads;
