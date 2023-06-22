import React from 'react';
import styles from './personalProject.module.css';
import Card from '../../common/Card';

function PersonalProject() {
  return (
    <div>
      <p className={styles.heading}>Projects I have worked on</p>
      <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <Card projectName="Mini Projects" language="React, Firebase" />
        <Card projectName="Todo List" language="React, Firebase" />
      </div>
    </div>
  );
}

export default PersonalProject;
