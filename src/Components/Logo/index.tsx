import React from 'react';

import animation from './animation';
import './Logo.scss';
import { ReactComponent as LogoSvg } from './Logo.svg';

type LogoProps = typeof Logo.defaultProps & {
  isAnimated: boolean;
};

class Logo extends React.PureComponent<LogoProps> {
  static defaultProps = {
    isAnimated: false
  };

  componentDidMount(): void {
    const { isAnimated } = this.props;

    if (isAnimated) {
      animation();
    }
  }

  render() {
    return (
      <div className="ml8">
        <span className="logo-container">
          <span className="logo">
            <LogoSvg />
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
