// Card.js
import React from 'react';

const Card = ({ image, thumb, title, status, description, href = "#" }) => {
  return (
    <li>
      <a href={href} className="card">
        <img src={image} className="card__image" alt={title} />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb" src={thumb} alt={title} />
            <div className="card__header-text">
              <h3 className="card__title">{title}</h3>            
              <span className="card__status">{status}</span>
            </div>
          </div>
          <p className="card__description">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default Card;
