import React from 'react';
import { useDidMount } from 'beautiful-react-hooks';

import './Sphere.scss';

import { default as animation } from './animation';

const Sphere: React.FC = () => {
  const containerRef = React.createRef<HTMLDivElement>();
  useDidMount(() => containerRef.current && animation(containerRef.current));

  return <div ref={containerRef} className="canvas" />;
};

export default Sphere;
