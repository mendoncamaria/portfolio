import React from 'react';
import maria from '../../assets/maria.jpg';

function AboutMe() {
  return (
    <>
      <div>
        About Me
      </div>
      <div>
        <img src={maria} alt="Maria" width="250px" height="350px" />
      </div>
    </>
  );
}

export default AboutMe;
