import React from 'react';

import { ReactComponent as LogoSvg } from './Logo.svg';

type LogoIconProps = {
  width?: number | string;
  height?: number | string;
};

const LogoIcon: React.FC<LogoIconProps> = React.memo(
  ({ width = '100%', height = '100%' }) => (
    <LogoSvg width={width} height={height} />
  )
);
export default LogoIcon;
