import React from 'react';
import cssIcon from '../../assets/css3.png';
import htmlIcon from '../../assets/html5.png';
import javascriptIcon from '../../assets/javascript.png';
import reactNativeIcon from '../../assets/react.png';
import reactIcon from '../../assets/reactJS.png';
import reduxIcon from '../../assets/redux.png';
import githubicon from '../../assets/github.png';
import mongoDBIcon from '../../assets/mongoDB.png';
import mySQLIcon from '../../assets/mySQL.png';
import pythonIcon from '../../assets/python.png';
import sassIcon from '../../assets/sass.png';
import vscodeIcon from '../../assets/vscode.png';

function Skills() {
  return (
    <>
      <div className="heading">SKILLS</div>
      <div>
        <div className="gpLang">
          <h1>Programming Language</h1>
          <p>
            <img alt="skill" src={pythonIcon} height="150px" width="150px" />
          </p>
          <p>
            <img
              alt="skill"
              src={javascriptIcon}
              height="150px"
              width="150px"
            />
          </p>
        </div>

        <div className="frontend">
          <h1>Frontend</h1>
          <p>
            <img alt="skill" src={reactIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={reduxIcon} height="150px" width="150px" />
          </p>
          <p><img alt="skill" src={reactNativeIcon} height="150px" width="150px" /></p>
          <p>
            <img alt="skill" src={htmlIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={cssIcon} height="150px" width="150px" />
          </p>
          <p>
            <img alt="skill" src={sassIcon} height="150px" width="150px" />
          </p>
        </div>

        <div className="backend">
          <h1>Backend</h1>
          <p>Node.js</p>
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
          <p>GitLab</p>
        </div>

        <div className="projMgmtTools">
          <h1>Project Management Tools</h1>
          <p>Redmine</p>
          <p>Agile</p>
        </div>

        <div className="codeEditors">
          <h1>Integrated Development Environments (IDEs) and Text Editors</h1>
          <p>
            <img alt="skill" src={vscodeIcon} height="150px" width="150px" />
          </p>
          <p>Visual Studio</p>
          <p>Notepad++</p>
        </div>

        <div className="os">
          <h1>Operating Systems</h1>
          <p>Windows</p>
          <p>Ubuntu</p>
        </div>

        <div className="cloudServices">
          <h1>Cloud Services</h1>
          <p>Firebase</p>
          <p>Amazon Web Services (AWS)</p>
          <p>Google Cloud Platform (GCP)</p>
        </div>
      </div>
    </>
  );
}

export default Skills;
