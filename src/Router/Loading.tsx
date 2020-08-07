import LogoIcon from '@/Components/Logo';
import { useLifecycle } from 'beautiful-react-hooks';
import React, { useState } from 'react';
import { Progress } from 'reactstrap';

type LoadingProps = {
  loadingTime: number;
};

const LOADING_MAX_VALUE = 100;

const Loading: React.FC<LoadingProps> = ({ loadingTime }: LoadingProps) => {
  const [loadingValue, setLoadingValue] = useState<number>(0);
  let timerId = 0;

  useLifecycle(
    () => {
      let initialValue = 0;
      const tick = (1 * loadingTime) / 100;

      timerId = window.setInterval(() => {
        initialValue += 1;

        if (initialValue <= LOADING_MAX_VALUE) {
          setLoadingValue(initialValue);
        }
      }, tick);
    },
    () => {
      clearInterval(timerId);
    }
  );

  return (
    <div className="loading-container">
      <LogoIcon width="10em" />
      <br />
      <span>Site is loading...</span>
      <div className="progress-loading-bar-container">
        <Progress bar value={loadingValue} max={LOADING_MAX_VALUE} />
      </div>
    </div>
  );
};

export default Loading;
