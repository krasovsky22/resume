import React from 'react';

import classNames from 'classnames';
import { animateLogo } from './animation';
import LogoIcon from '.';

import './Logo.scss';

type LogoProps = typeof Logo.defaultProps & {
  isAnimated: boolean;
};

type LogoState = {
  isAnimationCompleted: boolean;
};

class Logo extends React.PureComponent<LogoProps, LogoState> {
  static defaultProps = {
    isAnimated: false
  };

  state: LogoState = {
    isAnimationCompleted: false
  };

  async componentDidMount(): Promise<void> {
    const { isAnimated } = this.props;

    if (isAnimated) {
      await animateLogo();

      this.setState({ isAnimationCompleted: true });
    }
  }

  render() {
    const { isAnimationCompleted } = this.state;

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
  }
}

export default Logo;
