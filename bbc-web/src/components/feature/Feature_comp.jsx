import React from 'react';
import './feature.css';

const FeatureC = ({ title, comp, color }) => (
  <div className="feature-container">
    <div className="feature-title">
      <div className={`${color}`}/>
      <h1 className="title">{title}</h1>
    </div>
    <div className="feature-text">
    {comp}
    </div>
  </div>
);

export default FeatureC;
