import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function Card({ projectName, language }) {
  return (
    <div>
      <div style={{ backgroundColor: 'blue', width: '230px', height: '230px', padding: '1rem' }}>
        <p style={{ color: 'white' }}>{language} </p>
        <h1 style={{ fontSize: '3em' }}>{projectName}</h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-evenly' }}>
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
    </div>
  );
}

export default Card;
