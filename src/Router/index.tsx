import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { RouteProps } from 'react-router-dom';
import { uid } from 'react-uid';
import Loading from '@components/Loading';
import {
  IconDefinition,
  faHome,
  faCode,
  faGrinAlt
} from '@fortawesome/free-solid-svg-icons';

export interface AppRouteProps extends RouteProps {
  icon: IconDefinition;
  title: string;
  path: string;
}

export const app_routes: AppRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../Views/Home')),
    icon: faHome,
    title: 'Home'
  },
  {
    exact: true,
    path: '/about',
    component: lazy(() => import('../Views/About')),
    icon: faCode,
    title: 'Home'
  },
  {
    exact: true,
    path: '/skills',
    component: lazy(() => import('../Views/Skills')),
    icon: faGrinAlt,
    title: 'Home'
  }
];

const Routing: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {app_routes.map((route: RouteProps) => (
          <Route key={uid(route)} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routing;
