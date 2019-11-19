import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'reactstrap';

type NavigationElementProps = {
  title: string;
  children: React.ReactNode;
};

type NavigationElementState = {
  isHovered: boolean;
};

class NavigationElement extends React.PureComponent<
  NavigationElementProps,
  NavigationElementState
> {
  state = {
    isHovered: false
  };

  onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    console.log('enter');
    this.setState({ isHovered: true });
  };

  onMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    console.log('leave');
    this.setState({ isHovered: false });
  };

  render() {
    const { title, children } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="navigation-element"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {isHovered ? <p className="title-text">{title}</p> : children}
      </div>
    );
  }
}

export default NavigationElement;
