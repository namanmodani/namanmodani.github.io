import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import data from '../data/workData.json';

const Work = () => {
  return (
    <div className="work-content">
      <p style={{ fontWeight: 500 }}>Experience</p>
      {data.experience.map((item, index) => (
        <p key={index}>
          <a href={item.url} className="source-link" rel="noreferrer" target="_blank">
            {item.company} <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
          <br />
          {item.position}
        </p>
      ))}

      <hr />

      <p style={{ fontWeight: 500 }}>Honors</p>
      {data.honors.map((item, index) => (
        <p key={index}>
          <a href={item.url} className="source-link" rel="noreferrer" target="_blank">
            {item.title} <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
          <br />
          {item.achievement}
        </p>
      ))}

      <hr />

      <p style={{ fontWeight: 500 }}>Projects</p>
      {data.projects.map((item, index) => (
        <p key={index}>
          <a href={item.url} rel="noreferrer" target="_blank">
            {item.name} <FontAwesomeIcon icon={faSquareArrowUpRight} className="proj-link" />
          </a>
        </p>
      ))}
    </div>
  );
};

export default Work;
