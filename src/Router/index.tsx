import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { RouteProps } from 'react-router-dom';
import { uid } from 'react-uid';
import Loading from '@components/Loading';

const routes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../Views/Home'))
  },
  {
    exact: true,
    path: '/about',
    component: lazy(() => import('../Views/About'))
  },
  {
    exact: true,
    path: '/skills',
    component: lazy(() => import('../Views/Skills'))
  }
];

const Routing: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route: RouteProps) => (
          <Route key={uid(route)} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routing;
