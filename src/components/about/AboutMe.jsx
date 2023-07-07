import React from 'react';
import styles from './aboutme.module.css';

function AboutMe() {
  return (
    <>
      <div className="heading">
        <p className={styles.heading}>About Me</p>
      </div>
      <div>
        <p>
          Welcome to my portfolio! I am an aspiring web developer with 1 year of
          experience in building web applications. During my journey, I had the
          opportunity to work on a banking website, where I gained valuable
          insights into the industry and honed my skills in creating
          user-friendly interfaces. Although I have primarily focused on a
          single project, I have also invested time in personal projects to
          expand my knowledge and explore different aspects of web development.
          <br />
          One of my key areas of expertise is ReactJS. I thoroughly enjoy
          leveraging its capabilities to create dynamic and responsive web
          applications. I am always eager to learn and grow, and I am open to
          collaborating with like-minded individuals and teams to take on new
          and exciting challenges in the field of web development.
          <br />
          Feel free to explore my portfolio and get in touch with me if you're
          interested in working together or if you have any questions. Let's
          bring our ideas to life through the power of web development!
          <br />
        </p>
      </div>
    </>
  );
}

export default AboutMe;
