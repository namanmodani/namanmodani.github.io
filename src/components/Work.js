import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  return (
    <div className="work-content">
      <p style={{ fontWeight: 400 }}>Experience</p>
      <p><a href="https://careers.linkedin.com/apm" className="source-link" rel="noreferrer" target="_blank">LinkedIn <FontAwesomeIcon icon={faSquareArrowUpRight} /></a><br />
      Associate Product Manager</p>

      <p><a href="https://slack.engineering/unleashing-impact-at-slacks-data-engineering-internship/" className="source-link" rel="noreferrer" target="_blank">Slack <FontAwesomeIcon icon={faSquareArrowUpRight} /></a><br />
      Technical Program Manager</p>

      <p><a href="https://www.ericsson.com/en/careers/student-young-professionals/internships" className="source-link" rel="noreferrer" target="_blank">Ericsson <FontAwesomeIcon icon={faSquareArrowUpRight} /></a><br />
      Software Engineer</p>

      <p><a href="https://namanmodani.github.io/old/pdfs/srs.pdf" className="source-link" rel="noreferrer" target="_blank">Stanford  <FontAwesomeIcon icon={faSquareArrowUpRight} /></a><br />
      Researcher</p>

      <hr />

      <p style={{ fontWeight: 400 }}>Honors</p>
      <p><a href="https://opensource.googleblog.com/2020/02/announcing-our-google-code-in-2019.html" className="source-link" rel="noreferrer" target="_blank">Google Code-in <FontAwesomeIcon icon={faSquareArrowUpRight} /></a><br />
      Grand Prize Winner</p>

      <hr />

      <p style={{ fontWeight: 400 }}>Projects</p>
      <p><a href="https://solve.mit.edu/challenges/horizonprize/solutions/51857" rel="noreferrer" target="_blank">Denotia <FontAwesomeIcon icon={faSquareArrowUpRight} className="proj-link" /></a></p>
      <p><a href="https://sandhi-the-connect.github.io/src/" rel="noreferrer" target="_blank">Sandhi <FontAwesomeIcon icon={faSquareArrowUpRight} className="proj-link" /></a></p>
      <p><a href="https://www.youngscientistsjournal.com/" rel="noreferrer" target="_blank">Young Scientists Journal <FontAwesomeIcon icon={faSquareArrowUpRight} className="proj-link" /></a></p>
    </div>
  );
};

export default Work;