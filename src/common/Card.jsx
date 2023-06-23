import React, { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './card.css';

const Card = ({ language, projectName, githubLink, websiteLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <p className="card-language">{language}</p>
        <h1 className="card-title">{projectName}</h1>
        <div className="card-links">
          <p>
            <FaGithub />
            Github
          </p>
          <p>
            <FaGlobe />
            Website
          </p>
        </div>
      </div>
      <div className="card-back">
        {/* Add content for the back of the card here */}
      </div>
    </div>
  );
};

export default Card;
