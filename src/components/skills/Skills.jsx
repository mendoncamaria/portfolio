import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  BackendSkillList,
  CloudServicesList,
  CodeEditorsList,
  DatabaseList,
  FrontendSkillList,
  GeneralPurposeLanguageList,
  OperatingSystemsList,
  ProjectManagementToolsList,
  VersionControlSystemsList,
} from './SkillList';

function Skills() {
  return (
    <>
      <div className="heading">SKILLS</div>
      <div>
        <div className="gpLang">
          <h1>Programming Language</h1>
          {GeneralPurposeLanguageList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="frontend">
          <h1>Frontend</h1>
          {FrontendSkillList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="backend">
          <h1>Backend</h1>
          {BackendSkillList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="db">
          <h1>Database</h1>
          {DatabaseList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="versionControl">
          <h1>Version Control Systems</h1>
          {VersionControlSystemsList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="projMgmtTools">
          <h1>Project Management Tools</h1>
          {ProjectManagementToolsList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="codeEditors">
          <h1>Integrated Development Environments (IDEs) and Text Editors</h1>
          {CodeEditorsList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="os">
          <h1>Operating Systems</h1>
          {OperatingSystemsList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>

        <div className="cloudServices">
          <h1>Cloud Services</h1>
          {CloudServicesList.map((item) => (
            <img
              key={uuidv4()}
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
