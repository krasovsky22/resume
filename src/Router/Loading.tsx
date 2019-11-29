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
        <LogoIcon width="15%" />
        <br />
        <span>Site is loading...</span>
        <div>
          <Progress
            bar
            value={loadingValue}
            max={this.maxValue}
            className="progress-bar"
          />
        </div>
      </div>
    );
  }
}

export default Loading;