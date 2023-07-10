import PythonIcon from '../../assets/python.png';
import JavascriptIcon from '../../assets/javascript.png';

import ReactIcon from '../../assets/reactJS.png';
import ReduxIcon from '../../assets/redux.png';
import ReactNativeIcon from '../../assets/react.png';
import HtmlIcon from '../../assets/html5.png';
import CssIcon from '../../assets/css3.png';
import SassIcon from '../../assets/sass.png';

import NodeJSIcon from '../../assets/nodeJS.png';

import MongoDBIcon from '../../assets/mongoDB.png';
import MySQLIcon from '../../assets/mySQL.png';

import GithubIcon from '../../assets/github.png';
import GitlabIcon from '../../assets/gitlab.png';

import RedmineIcon from '../../assets/redmine.png';
import AgileIcon from '../../assets/agile.png';

import VSCodeIcon from '../../assets/vscode.png';
import VisualStudioIcon from '../../assets/visual-studio.png';
import NotepadPlusPlus from '../../assets/notepasPlusPlus.png';

import WindowsIcon from '../../assets/windows.png';
import UbuntuIcon from '../../assets/ubuntu.png';

import FirebaseIcon from '../../assets/firebase.png';
import AwsIcon from '../../assets/aws.png';
import GcpIcon from '../../assets/gcp.png';

export const skillsList = [
  PythonIcon,
  JavascriptIcon,
  ReactIcon,
  ReduxIcon,
  ReactNativeIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  NodeJSIcon,
  MongoDBIcon,
  MySQLIcon,
  GithubIcon,
  GitlabIcon,
  RedmineIcon,
  AgileIcon,
  VSCodeIcon,
  VisualStudioIcon,
  NotepadPlusPlus,
  WindowsIcon,
  UbuntuIcon,
  FirebaseIcon,
  AwsIcon,
  GcpIcon,
];

export const GeneralPurposeLanguageList = [
  {
    src: PythonIcon,
    alt: 'Python',
    height: '64px',
    width: '66px',
  },
  {
    alt: 'JavaScript',
    src: JavascriptIcon,
    height: '64px',
    width: '64px',
  },
];

export const FrontendSkillList = [
  {
    alt: 'React',
    src: ReactIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'Redux',
    src: ReduxIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'react-native',
    src: ReactNativeIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'HTML',
    src: HtmlIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'CSS',
    src: CssIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'SASS',
    src: SassIcon,
    height: '64px',
    width: '64px',
  },
];

export const BackendSkillList = [
  {
    alt: 'NodeJS',
    src: NodeJSIcon,
    height: '61x',
    width: '120px',
  },
];

export const DatabaseList = [
  {
    alt: 'MongoDB',
    src: MongoDBIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'MySQL',
    src: MySQLIcon,
    height: '64px',
    width: '64px',
  },
];

export const VersionControlSystemsList = [
  {
    alt: 'Github',
    src: GithubIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'Gitlab',
    src: GitlabIcon,
    height: '64px',
    width: '64px',
  },
];

export const ProjectManagementToolsList = [
  {
    alt: 'Redmine',
    src: RedmineIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'Agile',
    src: AgileIcon,
    height: '64px',
    width: '64px',
  },
];

export const CodeEditorsList = [
  {
    alt: 'VS-Code',
    src: VSCodeIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'Visual-Studio-Code',
    src: VisualStudioIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'Notepad-Plus-Plus',
    src: NotepadPlusPlus,
    height: '64px',
    width: '64px',
  },
];

export const OperatingSystemsList = [
  {
    alt: 'Windows',
    src: WindowsIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'Ubuntu',
    src: UbuntuIcon,
    height: '64px',
    width: '64px',
  },
];

export const CloudServicesList = [
  {
    alt: 'Firebase',
    src: FirebaseIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'AWS',
    src: AwsIcon,
    height: '64px',
    width: '64px',
  },
  {
    alt: 'GCP',
    src: GcpIcon,
    height: '64px',
    width: '64px',
  },
];

export const skillCategories = [
  {
    title: 'Programming Language',
    className: 'gpLang',
    skills: GeneralPurposeLanguageList,
  },
  { title: 'Frontend', className: 'frontend', skills: FrontendSkillList },
  { title: 'Backend', className: 'backend', skills: BackendSkillList },
  { title: 'Database', className: 'db', skills: DatabaseList },
  {
    title: 'Version Control Systems',
    className: 'versionControl',
    skills: VersionControlSystemsList,
  },
  {
    title: 'Project Management Tools',
    className: 'projMgmtTools',
    skills: ProjectManagementToolsList,
  },
  {
    title: 'Integrated Development Environments (IDEs) and Text Editors',
    className: 'codeEditors',
    skills: CodeEditorsList,
  },
  { title: 'Operating Systems', className: 'os', skills: OperatingSystemsList },
  {
    title: 'Cloud Services',
    className: 'cloudServices',
    skills: CloudServicesList,
  },
];
