import styles from './App.module.css';
import AboutMe from './components/about/AboutMe';
import Contact from './components/contactMe/Contact';
import Education from './components/education/Education';
import WorkExperience from './components/experience/WorkExperience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PersonalProject from './components/personalProjects/PersonalProject';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutMe />
      <WorkExperience />
      <Skills />
      <Education />
      <PersonalProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
