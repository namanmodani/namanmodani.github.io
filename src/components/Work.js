import React from 'react';
import ExternalArrow from './ExternalArrow';
import data from '../data/workData.json';

const Work = () => {
  return (
    <div className="work-content">
      <p className="section-title">Experience</p>
      {data.experience.map((item, index) => (
        <p key={index}>
          <a href={item.url} className="source-link" rel="noreferrer" target="_blank">
            {item.company}
          </a>
          <br />
          {item.position}
        </p>
      ))}

      <hr />

      <p className="section-title">Honors</p>
      {data.honors.map((item, index) => (
        <p key={index}>
          <a href={item.url} className="source-link" rel="noreferrer" target="_blank">
            {item.title}
          </a>
          <br />
          {item.achievement}
        </p>
      ))}

      <hr />

      <p className="section-title">Projects</p>
      {data.projects.map((item, index) => (
        <p key={index}>
          <a href={item.url} rel="noreferrer" target="_blank">
            {item.name}<ExternalArrow />
          </a>
        </p>
      ))}
    </div>
  );
};

export default Work;
