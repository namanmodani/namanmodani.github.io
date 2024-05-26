import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

const Picks = () => {
  return (
    <div className="blog-container">
      <section className="section">
        <p className="section-title">Internet Picks</p>
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
        <hr className="divider" />
        <div className="row">
          <p className="note"><a href="https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=8rkjkAuiCbmyHwOw" rel="noreferrer" target="_blank">Essence of Linear Algebra <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">3Blue1Brown</p>
        </div>
      </section>
        {/* <div className="row">
          <p className="note"><a href="" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website"></p>
        </div> */}
    </div>
  );
};

export default Picks;
