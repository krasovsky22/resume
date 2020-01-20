import React from 'react';
import classnames from 'classnames';
import { RouteComponentProps } from 'react-router';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCode,
  faBars,
  faGrinAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import LogoIcon from '@/Components/Logo';
import Hoverable from '@/Components/Hoverable';
import EmailTo from '@/Components/Links/EmailTo';
import isMobile from './Utils/isMobile';

type NavigationBarState = {
  width: number;
  isMenuOpened: boolean;
};

class NavigationBar extends React.PureComponent<
  RouteComponentProps,
  NavigationBarState
> {
  state = {
    isMenuOpened: false,
    width: window.innerWidth
  };

  clickMenu = () => {
    const { isMenuOpened } = this.state;
    this.setState({ isMenuOpened: !isMenuOpened });
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render() {
    const {
      match: { path }
    } = this.props;

    const { width, isMenuOpened } = this.state;

    const isMobileState = isMobile(width);

    return (
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">
            <a href="/" rel="index">
              <LogoIcon /> <br />
              <small className="logo-text">Vlad</small>
            </a>
          </div>
          {isMobileState && (
            <div className="mobile-menu" onClick={this.clickMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </div>
        <Navbar
          className={classnames('nav-bar-menu', {
            'is-menu-opened': isMobileState && isMenuOpened
          })}
        >
          <Nav vertical={true}>
            <NavItem>
              <NavLink
                href="/"
                disabled={path === '/'}
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
                disabled={path === '/about'}
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
                disabled={path === '/skills'}
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
            {/* <NavItem>
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
            </NavItem> */}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
