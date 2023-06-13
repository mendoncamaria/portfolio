import React from 'react';
import cssIcon from '../../assets/css3.png'
import htmlIcon from '../../assets/html5.png'
import javascriptIcon from '../../assets/javascript.png'
import reactIcon from '../../assets/react.png'
import reduxIcon from '../../assets/redux.png'

function Skills() {
  return (
    <>
    <img alt="skill" src={cssIcon} height="250px" width="250px" />
    <img alt="skill" src={htmlIcon} height="250px" width="250px" />
    <img alt="skill" src={javascriptIcon} height="250px" width="250px" />
    <img alt="skill" src={reactIcon} height="250px" width="250px" />
    <img alt="skill" src={reduxIcon} height="250px" width="250px" />
    </>
  );
}

export default Skills;
