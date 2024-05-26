import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';  // Import the CSS file

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="section">
        <p className="section-title"><a href="/#/picks" rel="noreferrer">Internet Picks <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
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
          <p className="note"><a href="https://youtu.be/W608u6sBFpo?si=1A5KhJQh01WX9DVY" rel="noreferrer" target="_blank">Blitzscaling <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Brian Chesky</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://www.joshworth.com/dev/pixelspace/pixelspace_solarsystem.html" rel="noreferrer" target="_blank">If the Moon Were Only 1 Pixel <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Josh Worth</p>
        </div>
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://ncase.me/trust/" rel="noreferrer" target="_blank">The Evolution of Trust <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Nicky Case</p>
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
          <p className="note"><a href="https://www.palette.build/list/b7e92e89-7a57-4226-af70-222fbbc9dfea" rel="noreferrer" target="_blank">Elite Television <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Palette</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
