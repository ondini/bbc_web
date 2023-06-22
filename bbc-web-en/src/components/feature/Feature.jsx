import React from 'react';
import './feature.css';

const Feature = ({ title, text, color }) => (
  <div className="feature-container">
    <div className="feature-title">
      <div className={`${color}`}/>
      <h1 className="title">{title}</h1>
    </div>
    <div className="feature-text">
      {text.map((item, index) => (
       <p>{item}</p>
      ))}
    </div>
  </div>
);

export default Feature;
