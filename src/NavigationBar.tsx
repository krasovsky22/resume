import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import LogoIcon from '@/Components/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCode,
  faGrinAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import EmailTo from '@/Components/Links/EmailTo';
import Hoverable from '@/Components/Hoverable';

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
          <NavLink href="/" className="home-link">
            <Hoverable>
              {isHovered =>
                isHovered ? (
                  <p className="title-text">{'Home'}</p>
                ) : (
                  <FontAwesomeIcon icon={faHome} />
                )
              }
            </Hoverable>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="about-link">
            <Hoverable>
              {isHovered =>
                isHovered ? (
                  <p className="title-text">{'About'}</p>
                ) : (
                  <FontAwesomeIcon icon={faGrinAlt} />
                )
              }
            </Hoverable>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="skills-link">
            <Hoverable>
              {isHovered =>
                isHovered ? (
                  <p className="title-text">{'Skills'}</p>
                ) : (
                  <FontAwesomeIcon icon={faCode} />
                )
              }
            </Hoverable>
          </NavLink>
        </NavItem>
        <NavItem>
          <EmailTo>
            <Hoverable>
              {isHovered =>
                isHovered ? (
                  <p className="title-text">{'Email'}</p>
                ) : (
                  <FontAwesomeIcon icon={faEnvelope} />
                )
              }
            </Hoverable>
          </EmailTo>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default NavigationBar;
