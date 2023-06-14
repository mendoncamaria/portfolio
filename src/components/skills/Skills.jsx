import React from 'react';
import cssIcon from '../../assets/css3.png'
import htmlIcon from '../../assets/html5.png'
import javascriptIcon from '../../assets/javascript.png'
import reactIcon from '../../assets/react.png'
import reduxIcon from '../../assets/redux.png'
import githubicon from '../../assets/github.png'
import mongoDBIcon from '../../assets/mongoDB.png'
import mySQLIcon from '../../assets/mySQL.png'
import pythonIcon from '../../assets/python.png'
import sassIcon from '../../assets/sass.png'
import vscodeIcon from '../../assets/vscode.png'

function Skills() {
  return (
    <>
    <div className="heading">SKILLS</div>
    <div>
    <img alt="skill" src={cssIcon} height="150px" width="150px" />
    <img alt="skill" src={htmlIcon} height="150px" width="150px" />
    <img alt="skill" src={javascriptIcon} height="150px" width="150px" />
    <img alt="skill" src={reactIcon} height="150px" width="150px" />
    <img alt="skill" src={reduxIcon} height="150px" width="150px" />
    <img alt="skill" src={githubicon} height="150px" width="150px" />
    <img alt="skill" src={mongoDBIcon} height="150px" width="150px" />
    <img alt="skill" src={mySQLIcon} height="150px" width="150px" />
    <img alt="skill" src={pythonIcon} height="150px" width="150px" />
    <img alt="skill" src={sassIcon} height="150px" width="150px" />
    <img alt="skill" src={vscodeIcon} height="150px" width="150px" /></div>
    </>
  );
}

export default Skills;
