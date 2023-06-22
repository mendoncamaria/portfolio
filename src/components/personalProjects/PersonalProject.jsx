import React from 'react';
import styles from './personalProject.module.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function PersonalProject() {
  return (
    <div>
      <p className={styles.heading}>Projects I have worked on</p>
      <div style={{ backgroundColor: 'blue', width: '230px', height: '230px' }}>
        <p style={{ color: 'white' }}>React, Firebase</p>
        <h1 style={{ fontSize: '3em' }}>Mini Projects</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
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

export default PersonalProject;
