import React from 'react';
import classnames from 'classnames';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCode,
  faGrinAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import LogoIcon from '@/Components/Logo';
import Hoverable from '@/Components/Hoverable';
import EmailTo from '@/Components/Links/EmailTo';
import { RouteComponentProps } from 'react-router';

function NavigationBar(routerProps: RouteComponentProps) {
  const {
    match: { path }
  } = routerProps;

  return (
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
            <NavLink
              href="/"
              className={classnames('home-link', { active: path === '/' })}
            >
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
            <NavLink
              href="/about"
              className={classnames('about-link', {
                active: path === '/about'
              })}
            >
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
            <NavLink
              href="/skills"
              className={classnames('skills-link', {
                active: path === '/skills'
              })}
            >
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
}

export default NavigationBar;
