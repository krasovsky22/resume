import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="sidebar-nav">
        <Nav vertical={true}>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
