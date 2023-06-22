import React from 'react';
import './Card.css';

const Card = ({ title, text, color }) => (
  <div className="card-container">
    <div className="card-title">
      <div className={`${color}`}/>
      <h1>{title}</h1>
    </div>
    <div className="card-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Card;
