import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../img/CV_2024_07_08.pdf';
//test

function About() {
  return (
    <div className="p-5">
      <Link to='/' className="back-link">{'<- Back'}</Link>
      <h1>About Me</h1>
      <p>My name is Eoin McDonnell.</p>
      <p>I am a full stack developer with extensive experience in database recovery, assistance, building, and maintenance.</p>
      <p>After several years of programming, I am now focused on building the applications I used to support.</p>
      <p>My specialties include SQL, Python, and modern JavaScript frameworks such as React, along with REST and SOAP APIs.</p>
      <p>Originally from Dublin, Ireland, I hold dual citizenship and am an avid runner.</p>
      <div className="cv-content">
        <a href={CV} target="_blank" rel="noopener noreferrer">
          View CV (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;
