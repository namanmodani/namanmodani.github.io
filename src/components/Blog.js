import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';  // Import the CSS file

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="section">
        <p className="section-title">Internet Picks</p>
        <div className="row">
          <p className="note"><a href="https://stratechery.com/" rel="noreferrer" target="_blank">Stratechery <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Ben Thompson</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://waitbutwhy.com/" rel="noreferrer" target="_blank">Wait But Why <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Tim Urban</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://www.theguardian.com/society/2016/apr/07/the-sugar-conspiracy-robert-lustig-john-yudkin" rel="noreferrer" target="_blank">The Sugar Conspiracy <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Ian Leslie</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://www.newyorker.com/magazine/2012/12/24/utopian-for-beginners" rel="noreferrer" target="_blank">Utopian for Beginners <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Joshua Foer</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://www.dancarlin.com/hardcore-history-series/" rel="noreferrer" target="_blank">Hardcore History <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Dan Carlin</p>
        </div>
      </section>

      <section className="section">
        <p className="section-title">Field Notes</p>
        <div className="row">
          <p className="temp-note">This section is a WIP. Let me cook 🧑‍🍳</p>
        </div>
      </section>

      <section className="section">
        <p className="section-title">Recs</p>
        <div className="row">
          <p className="note"><a href="https://app.beliapp.com/lists/namanmodani?utm_medium=profile_link_to_webapp&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0rNyUwsKNBLztfPySwuKdbPS8xNzMvNT0nMywQAE5z%2FNCQAAAA%3D&_branch_match_id=1265128734521922815" rel="noreferrer" target="_blank">Food (since I procrastinated on aforementioned cooking) <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Beli</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://www.palette.build/list/b7e92e89-7a57-4226-af70'auto'22fbbc9dfea" rel="noreferrer" target="_blank">Elite Television <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Palette</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
