import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import LogoIcon from './Components/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCode,
  faGrinAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import EmailTo from './Components/Links/EmailTo';
import NavigationElement from './Components/Navigation/Element';

const NavigationBar: React.FC = () => (
  <div className="sidebar">
    <div className="logo">
      <a href="/" rel="index">
        <LogoIcon /> <br />
        <small className="logo-text">Vlad</small>
      </a>
    </div>
    <Navbar>
      <Nav vertical={true}>
        <NavItem>
          <NavigationElement className="home-link" isActive={true} title="Home">
            <FontAwesomeIcon icon={faHome} />
          </NavigationElement>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="about-link">
            <FontAwesomeIcon icon={faGrinAlt} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="skills-link">
            <FontAwesomeIcon icon={faCode} />
          </NavLink>
        </NavItem>
        <NavItem>
          <EmailTo>
            <FontAwesomeIcon icon={faEnvelope} />
          </EmailTo>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default NavigationBar;
