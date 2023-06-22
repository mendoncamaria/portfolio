import React, { useState } from 'react';
import styles from './contact.module.css';

function Contact() {
  // const [focus, setFocus] = useState(false);

  // const handleFocus = () => {
  //   setFocus(true);
  // };

  // const handleBlur = () => {
  //   setFocus(false);
  // };
  return (
    <div>
      <p className={styles.heading}>Contact Me</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className={styles.left}></div>
        <div className={styles.right}>
          <input
            type="text"
            className={styles.inputStyles}
            placeholder="EMAIL: "
          />
          <input
            type="text"
            className={styles.inputStyles}
            placeholder="NAME: "
          />
          <textarea
            type="text"
            className={styles.inputStyles}
            placeholder="write message...."
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                width: '40%',
                padding: '0.3rem',
                alignItems: 'center',
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
