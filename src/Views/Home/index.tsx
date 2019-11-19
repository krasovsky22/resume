import React from 'react';

import Logo from '@/Components/Logo/AnimatedLogo';

import './Home.scss';
import '@/Fonts/ArchivoNarrow-Bold.ttf';
import { Button } from 'reactstrap';
import EmailTo from '@/Components/Links/EmailTo';

const Home: React.FC = () => (
  <>
    <div className="main-text-zone">
      <h1>
        Hi, <br /> I'm Vlad, <br /> web developer.
      </h1>
      <h2>Full Stack Developer</h2>
      <Button className="contact-me-button">
        <EmailTo>CONTACT ME</EmailTo>
      </Button>
    </div>
    <div className="main-logo">
      <Logo isAnimated={true} />
    </div>
  </>
);

export default Home;
