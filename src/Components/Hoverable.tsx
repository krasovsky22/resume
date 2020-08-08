import React, { useState, useCallback } from 'react';

type HoverableProps = {
  children: React.FC<boolean>;
};

const Hoverable: React.FC<HoverableProps> = ({ children }: HoverableProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered]);
  const onMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered]);

  return (
    <div onMouseOver={onMouseEnter} onMouseOut={onMouseLeave}>
      {children(isHovered)}
    </div>
  );
};

export default Hoverable;
