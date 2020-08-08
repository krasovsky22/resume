import Hoverable from '@components/Hoverable';
import LogoIcon from '@components/Logo';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLifecycle } from 'beautiful-react-hooks';
import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { uid } from 'react-uid';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { app_routes } from './Router/index';
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
        <Nav vertical={!isMobileState} className="justify-content-around w-100">
          {app_routes.map(route => (
            <NavItem key={uid(route)}>
              <NavLink
                href={route.path}
                title={route.title}
                disabled={path === route.path}
                className={classnames('home-link', {
                  active: path === route.path
                })}
              >
                <Hoverable>
                  {isHovered =>
                    isHovered && !isMobileState ? (
                      <p className="title-text">{route.title}</p>
                    ) : (
                      <FontAwesomeIcon icon={route.icon} />
                    )
                  }
                </Hoverable>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
