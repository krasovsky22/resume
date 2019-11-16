import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import animation from './animation';
import './Logo.scss';
import { ReactComponent as LogoSvg } from './Logo.svg';

class Logo extends PureComponent {
  static propTypes = {
    animated: PropTypes.bool
  };

  static defaultProps = {
    animated: true
  };

  componentDidMount = () => {
    const { animated } = this.props;

    if (animated) {
      animation();
    }
  };

  render() {
    return (
      <div className="ml8">
        <span className="logo-container">
          <span className="logo">
            <LogoSvg />
          </span>
        </span>
        <span className="circle circle-white"></span>
        <span className="circle circle-container">
          <span className="circle circle-dark-dashed"></span>
        </span>
      </div>
    );
  }
}

export default Logo;
