import React from 'react';

import './Home.scss';
import Logo from '@/Components/Logo';

import '@/Fonts/ArchivoNarrow-Bold.ttf';

function Home() {
  return (
    <>
      <div className="main-text-zone pt-40">
        <h1>
          Hi, <br /> I'm Vlad, <br /> web developer.
        </h1>
      </div>
      <div className="main-logo">
        <Logo animated={true} />
      </div>
    </>
  );
}

export default Home;
