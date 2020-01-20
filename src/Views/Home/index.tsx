import React from 'react';
import anime from 'animejs';

import Logo from '@/Components/Logo/AnimatedLogo';

import './Home.scss';
import '@fonts/ArchivoNarrow-Bold.ttf';
import { Button } from 'reactstrap';
import EmailTo from '@/Components/Links/EmailTo';
import AnimatedText from './AnimatedText';

const Home: React.FC = () => {
  React.useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.main-text-zone span',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i) => 75 * (i + 1)
      })
      .add({
        targets: '.main-text-zone h2, .main-text-zone .contact-me-button',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 250
      });
  });

  return (
    <>
      <div className="main-text-zone">
        <h1>
          <AnimatedText text="Hi," />
          <br />
          <AnimatedText text="I'm Vlad," />
          <br />
          <AnimatedText text="web developer." />
        </h1>
        <h2>Full Stack Developer</h2>
        <Button className="contact-me-button">
          <EmailTo>vlad.krasovski@yahoo.com</EmailTo>
        </Button>
      </div>
      <div className="main-logo">
        <Logo isAnimated={true} />
      </div>
    </>
  );
};

export default Home;
