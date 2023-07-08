import React from 'react';
import styles from './education.module.css';
import { WORK_EXPERIENCE1 } from '../../common/textConstants';
import mres from '../../assets/mountRosary.png';
import smems from '../../assets/stMarys.jpg';
import sac from '../../assets/agnes.jpg';

function Education() {
  return (
    <>
      <div>
        <p className={styles.container}>Education</p>
      </div>
      <div className={styles.main}>
        <div className={styles.sub_container}>
          <div className="image">
            <img
              src={sac}
              width="200px"
              height="190px"
              style={{ borderRadius: '10px' }}
              alt="img"
            />
          </div>
          <div className="content">
            <h1 className="school">ST AGNES COLLEGE (AUTONOMOUS), MANGALORE</h1>
            <p className="education">BCA</p>
            <p className="dates">{WORK_EXPERIENCE1.DATE}</p>
            <p className="grades">8.4 CGPA</p>
            <p className="subjects">
              C, C++ Java, Python, IoT, JavaScript, Cloud COmputing
            </p>
          </div>
        </div>
        <div
          className={styles.sub_container}
          // style={{ flexDirection: 'row-reverse' }}
        >
          <div className="image">
            <img
              src={smems}
              width="200px"
              height="190px"
              style={{ borderRadius: '10px' }}
              alt="img"
            />
          </div>
          <div className="content">
            <h1 className="school">
              ST MARY'S SENIOR SECONDARY SCHOOL, KANNARPADY
            </h1>
            <p className="education">12th</p>
            <p className="dates">{WORK_EXPERIENCE1.DATE}</p>
            <p className="grades">7.2 CGPA</p>
            <p className="subjects">PCMC</p>
          </div>
        </div>
        <div className={styles.sub_container}>
          <div className="image">
            <img
              src={mres}
              width="200px"
              height="190px"
              style={{ borderRadius: '10px' }}
              alt="img"
            />
          </div>
          <div className="content">
            <h1 className="school">MOUNT ROSARY ENGLISH SCHOOL</h1>
            <p className="education">SSLC</p>
            <p className="dates">{WORK_EXPERIENCE1.DATE}</p>
            <p className="grades">91.84%</p>
            <p className="subjects">
              Maths, Science, Social Science, English, Hindi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
