import React from 'react';

import './About.scss';

import phpLogo from '@assets/php7-logo.png';
import htmlLogo from '@assets/html5-logo.png';
import reactLogo from '@assets/react-logo.png';
import javascriptLogo from '@assets/javascript-logo.png';

export default function About(): React.ReactElement {
  return (
    <>
      <div className="main-text-zone w-50">
        <h1>About Me</h1>
        <p>
          Professionally connected with the web development industry and
          information technology for many years.
        </p>
        <p className="mt-1">
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of outdoor activities, TV series and, MMORPG
          games. Passion about learning new technologies.
        </p>
        <p>Interested in working on ambitious projects with positive people.</p>
      </div>
      <section className="pyramid">
        <div className="about-logo-php">
          <img src={phpLogo} alt="php7-logo" />
        </div>
        <div className="about-logo-javascript">
          <img src={javascriptLogo} alt="javascript logo" />
        </div>
        <div className="about-logo-react">
          <img src={reactLogo} width="150px" height="150px" alt="react logo" />
        </div>
        <div className="about-logo-html">
          <img src={htmlLogo} alt="html5 logo" />
        </div>
      </section>
    </>
  );
}
