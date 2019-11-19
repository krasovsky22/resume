import React from 'react';

type HoverableProps = {
  children: React.FC<boolean>;
};

type HoverableState = {
  isHovered: boolean;
};

class Hoverable extends React.PureComponent<HoverableProps, HoverableState> {
  state = {
    isHovered: false
  };

  onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ isHovered: true });
  };

  onMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ isHovered: false });
  };

  render() {
    const { children } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="navigation-element"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children(isHovered)}
      </div>
    );
  }
}

export default Hoverable;
