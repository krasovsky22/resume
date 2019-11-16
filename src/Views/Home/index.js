import React from 'react';

import './Home.scss';
import Logo from '@/Components/Logo';

function Home() {
  return (
    <div className="main-text-zone">
      <h1>
        Hi, <br /> I'm Vlad, <br /> web developer.
      </h1>
      <Logo animated={true} />
    </div>
  );
}

export default Home;
