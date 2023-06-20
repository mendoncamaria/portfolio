import React from 'react';
import styles from './contact.module.css';

function Contact() {
  return (
    <div>
      <h1 className="container">Contact Me</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className={styles.left}></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
          }}
        >
          <input
            type="text"
            className={styles.inputStyles}
            placeholder="Enter text"
          />
          <input
            type="text"
            className={styles.inputStyles}
            placeholder="Enter text"
          />
          <textarea
            type="text"
            className={styles.inputStyles}
            placeholder="Enter text"
          />
          <button>submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
