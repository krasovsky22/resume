import LogoIcon from '@/Components/Logo';
import React from 'react';
import { Progress } from 'reactstrap';

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
  maxValue: number = 100;

  componentDidMount() {
    let initialValue = 0;
    const tick = (1 * this.props.loadingTime) / 100;
    this.timerId = window.setInterval(() => {
      initialValue += 1;
      if (initialValue <= this.maxValue) {
        this.setState({ loadingValue: initialValue });
      }
    }, tick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { loadingValue } = this.state;
    return (
      <div className="loading-container">
        <LogoIcon width="10em" />
        <br />
        <span>Site is loading...</span>
        <div className="progress-loading-bar-container">
          <Progress bar value={loadingValue} max={this.maxValue} />
        </div>
      </div>
    );
  }
}

export default Loading;
