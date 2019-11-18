import React from 'react';

import Logo from '@/Components/Logo/AnimatedLogo';

import './Home.scss';
import '@/Fonts/ArchivoNarrow-Bold.ttf';

const Home: React.FC = () => (
  <>
    <div className="main-text-zone">
      <h1>
        Hi, <br /> I'm Vlad, <br /> web developer.
      </h1>
    </div>
    <div className="main-logo">
      <Logo isAnimated={true} />
    </div>
  </>
);

export default Home;
