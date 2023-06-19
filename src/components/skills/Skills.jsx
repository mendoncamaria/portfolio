import React from 'react';

import pythonIcon from '../../assets/python.png';
import javascriptIcon from '../../assets/javascript.png';

import reactIcon from '../../assets/reactJS.png';
import reduxIcon from '../../assets/redux.png';
import reactNativeIcon from '../../assets/react.png';
import htmlIcon from '../../assets/html5.png';
import cssIcon from '../../assets/css3.png';
import sassIcon from '../../assets/sass.png';

import nodeJS from '../../assets/nodeJS.png';

import mongoDBIcon from '../../assets/mongoDB.png';
import mySQLIcon from '../../assets/mySQL.png';

import githubicon from '../../assets/github.png';
import gitlabIcon from '../../assets/gitlab.png';

import redmineIcon from '../../assets/redmine.png';
import agileIcon from '../../assets/agile.png';

import vscodeIcon from '../../assets/vscode.png';
import visualstudioIcon from '../../assets/visual-studio.png';
import notepadPlusPlus from '../../assets/notepasPlusPlus.png';

import windowsIcon from '../../assets/windows.png';
import UbuntuIcon from '../../assets/ubuntu.png';

import firebaseIcon from '../../assets/firebase.png';
import awsIcon from '../../assets/aws.png';
import gcpIcon from '../../assets/gcp.png';

function Skills() {
  return (
    <>
      <div className="heading">SKILLS</div>
      <div>
        <div className="gpLang">
          <h1>Programming Language</h1>
          <img alt="skill" src={pythonIcon} height="150px" width="150px" />
          <img alt="skill" src={javascriptIcon} height="150px" width="150px" />
        </div>

        <div className="frontend">
          <h1>Frontend</h1>

          <img alt="skill" src={reactIcon} height="150px" width="150px" />
          <img alt="skill" src={reduxIcon} height="150px" width="150px" />
          <img alt="skill" src={reactNativeIcon} height="150px" width="150px" />
          <img alt="skill" src={htmlIcon} height="150px" width="150px" />
          <img alt="skill" src={cssIcon} height="150px" width="150px" />
          <img alt="skill" src={sassIcon} height="150px" width="150px" />
        </div>

        <div className="backend">
          <h1>Backend</h1>
          <p>
            <img alt="skill" src={nodeJS} height="150px" width="150px" />
          </p>
        </div>

        <div className="db">
          <h1>Database</h1>
          <p>
            <img alt="skill" src={mongoDBIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={mySQLIcon} height="150px" width="150px" />
          </p>
        </div>

        <div className="versionControl">
          <h1>Version Control Systems</h1>
          <p>
            <img alt="skill" src={githubicon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={gitlabIcon} height="150px" width="150px" />
          </p>
        </div>

        <div className="projMgmtTools">
          <h1>Project Management Tools</h1>
          <p>
            <img alt="skill" src={redmineIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={agileIcon} height="150px" width="150px" />
          </p>
        </div>

        <div className="codeEditors">
          <h1>Integrated Development Environments (IDEs) and Text Editors</h1>
          <p>
            <img alt="skill" src={vscodeIcon} height="150px" width="150px" />
          </p>
          <p>
            <img
              alt="skill"
              src={visualstudioIcon}
              height="150px"
              width="150px"
            />
          </p>
          <p>
            <img
              alt="skill"
              src={notepadPlusPlus}
              height="150px"
              width="150px"
            />
          </p>
        </div>

        <div className="os">
          <h1>Operating Systems</h1>
          <p>
            <img alt="skill" src={windowsIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={UbuntuIcon} height="150px" width="150px" />
          </p>
        </div>

        <div className="cloudServices">
          <h1>Cloud Services</h1>
          <p>
            <img alt="skill" src={firebaseIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={awsIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={gcpIcon} height="150px" width="150px" />
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
