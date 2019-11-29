import React from 'react';

import './Sphere.scss';

import { default as animation } from './animation';

class Sphere extends React.PureComponent {
  private containerRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.containerRef.current) {
      animation(this.containerRef.current);
    }
  }

  render() {
    return <div ref={this.containerRef} className="canvas" />;
  }
}

export default Sphere;
