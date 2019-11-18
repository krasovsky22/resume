import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import LogoIcon from './Components/Logo';

const NavigationBar: React.FC = () => (
  <div className="sidebar">
    <div className="logo">
      <a href="/" rel="index">
        <LogoIcon />
      </a>
    </div>
    <Navbar>
      <Nav vertical={true}>
        <NavItem>
          <NavLink href="#">H</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">H</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">H</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">H</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">H</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default NavigationBar;
