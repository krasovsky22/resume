import React, { useState } from 'react';

import classNames from 'classnames';
import { animateLogo } from './animation';
import LogoIcon from '.';

import './Logo.scss';
import { useDidMount } from 'beautiful-react-hooks';

type LogoProps = {
  isAnimated?: boolean;
};

const Logo: React.FC<LogoProps> = ({ isAnimated = false }: LogoProps) => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState<boolean>(
    false
  );

  useDidMount(async () => {
    if (isAnimated) {
      await animateLogo();
      setIsAnimationCompleted(true);
    }
  });

  return (
    <div className="ml8">
      <span className="logo-container">
        <span
          className={classNames('logo', {
            'empty-logo': !isAnimationCompleted
          })}
        >
          <LogoIcon />
        </span>
      </span>
      <span className="circle circle-big"></span>
      <span className="circle circle-container">
        <span className="circle circle-small"></span>
      </span>
    </div>
  );
};

export default Logo;
