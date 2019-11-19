import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'reactstrap';
import useHover from '@/Hooks/useHover';

type NavigationElementProps = {
  title: string;
  isActive: boolean;
  className: string;
  children: React.ReactNode;
};

const NavigationElement = (props: NavigationElementProps) => {
  const { className, isActive, children, title } = props;
  const Element = (isHovered: boolean) => (
    <NavLink href="/" className={classNames(className, { active: isActive })}>
      {isHovered ? <p>{title}</p> : children}
    </NavLink>
  );

  const [hoverable, hovered] = useHover(Element);

  return <div>{hoverable}</div>;
};

export default NavigationElement;
