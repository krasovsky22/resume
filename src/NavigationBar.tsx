import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

const NavigationBar: React.FC = () => (
  <div className="sidebar">
    <Navbar className="">
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
