import React from 'react';
import styles from './header.module.css';
import { FaGithub, FaLinkedin, FaPeriscope } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Header() {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <h1 className={styles.name}>Maria Mendonca</h1>
        <h2 className={styles.title}>Frontend Developer</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <a
            href="https://www.linkedin.com/in/mariamendonca/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mendoncamaria"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div>
          <a href="mailto:freelancermariamendonca@gmail.com?subject=Me&body=Hello!">
            <AiOutlineMail size={30} />
          </a>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/place/Udupi,+Karnataka/@13.3318078,74.7264916,14z/data=!3m1!4b1!4m6!3m5!1s0x3bbcbb69938f41cf:0xcccc99e431850143!8m2!3d13.3408807!4d74.7421427!16zL20vMDJkN2xs?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FaPeriscope />
            Udupi, Karnataka
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
