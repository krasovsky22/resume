import LogoIcon from '@/Components/Logo';
import React from 'react';
import { Progress } from 'reactstrap';
import { number } from 'prop-types';

type LoadingProps = {
  loadingTime: number;
};

type LoadingState = {
  loadingValue: number;
};

class Loading extends React.PureComponent<LoadingProps, LoadingState> {
  state = {
    loadingValue: 0
  };

  timerId: number = 0;

  componentDidMount() {
    let initialValue = 0;
    const tick = this.props.loadingTime / 100;
    this.timerId = window.setInterval(() => {
      initialValue++;
      this.setState({ loadingValue: initialValue });
    }, tick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { loadingValue } = this.state;
    return (
      <div className="loading-container">
        <LogoIcon width="15%" />
        <br />
        <span>Site is loading...</span>
        <Progress
          bar
          animated
          value={loadingValue}
          max={100}
          className="progress-bar"
        />
      </div>
    );
  }
}

export default Loading;
