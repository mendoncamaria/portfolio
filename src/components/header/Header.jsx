import React from 'react';

// pending: styling, moving constants out

function Header() {
  return (
    <>
      <div>
        <div>Maria Mendonca</div>
        <div>Frontend Developer</div>
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/mariamendonca/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mendoncamaria"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div>
          <a href="mailto:freelancermariamendonca@gmail.com?subject=Me&body=Hello!">
            email
          </a>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/place/Udupi,+Karnataka/@13.3318078,74.7264916,14z/data=!3m1!4b1!4m6!3m5!1s0x3bbcbb69938f41cf:0xcccc99e431850143!8m2!3d13.3408807!4d74.7421427!16zL20vMDJkN2xs?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Udupi, Karnataka
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
