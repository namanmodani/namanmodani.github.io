import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div>
      <section>
        <p style={{ fontWeight: 400 }}>Field Notes</p>
        <div className="row">
          <p className="note">This section is a WIP. Let me cook 🧑‍🍳</p>
          <p className="date"></p>
        </div>
      </section>

      <section>
        <p style={{ fontWeight: 400 }}>Recs</p>
        <div className="row">
          <p className="note"><a href="https://app.beliapp.com/lists/namanmodani?utm_medium=profile_link_to_webapp&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0rNyUwsKNBLztfPySwuKdbPS8xNzMvNT0nMywQAE5z%2FNCQAAAA%3D&_branch_match_id=1265128734521922815" rel="noopener" target="_blank">Food (since I procrastinated on aforementioned cooking) <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">Beli</p>
        </div>
        <hr style={{ margin: 'auto', opacity: 0.4 }} />
        <div className="row">
          <p className="note"><a href="/#/tv" rel="noopener" target="_blank">Elite Television <FontAwesomeIcon icon={faSquareArrowUpRight} /></a></p>
          <p className="website">IMDb</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;