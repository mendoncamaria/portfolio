import React from 'react';
import styles from './experience.module.css';
import { TEXT_CONSTANTS, WORK_EXPERIENCE1 } from '../../common/textConstants';
import img from '../../assets/niveus.jpg'

function WorkExperience() {
  return (
    <>
      <div className="heading">
        <p className={styles.heading}>{TEXT_CONSTANTS.WORK_EXPERIENCE}</p>
      </div>
      <div className={styles.main}>
        <div className={styles.sub_container}>
          <div className="image">
          <img src={img} width='200px' height= '190px' style={{borderRadius: '10px'}} alt='img' />
          </div>
          <div className="content">
            <h1 className="companyName">{WORK_EXPERIENCE1.NAME}</h1>
            <p className="jobTitle">{WORK_EXPERIENCE1.TITLE}</p>
            <p className="dates">{WORK_EXPERIENCE1.DATE}</p>
            <p className="contentData" style={{textAlign: 'justify'}}>{WORK_EXPERIENCE1.POINT1}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
