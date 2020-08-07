import Hoverable from '@components/Hoverable';
import LogoIcon from '@components/Logo';
import {
  faBars,
  faCode,
  faGrinAlt,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLifecycle } from 'beautiful-react-hooks';
import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import isMobile from './Utils/isMobile';

const NavigationBar: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const {
    match: { path }
  } = props;

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [width, setScreenWidth] = useState<number>(window.innerWidth);

  const clickMenu = useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened, setIsMenuOpened]);

  useLifecycle(
    () => {
      window.addEventListener('resize', () =>
        setScreenWidth(window.innerWidth)
      );
    },
    () => {
      window.removeEventListener('resize', () =>
        setScreenWidth(window.innerWidth)
      );
    }
  );

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
          <div className="mobile-menu" onClick={clickMenu}>
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
};

export default NavigationBar;
