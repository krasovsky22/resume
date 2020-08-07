import Logo from '@components/Logo/AnimatedLogo';
import '@fonts/ArchivoNarrow-Bold.ttf';
import Loadable from '@router/Loadable';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import AnimatedTextContainter from './AnimatedTextContainer';
import './Home.scss';

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <Loadable {...props}>
      <>
        <AnimatedTextContainter />
        <div className="main-logo">
          <Logo isAnimated={true} />
        </div>
      </>
    </Loadable>
  );
};

export default Home;
