import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '@/Views/Home';
import About from '@/Views/About';
import Loadable from './Loadable';
import Skills from '@/Views/Skills';

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(props: any) => (
          <Loadable {...props}>
            <Home />
          </Loadable>
        )}
      ></Route>
      <Route
        exact
        path="/about"
        component={(props: any) => (
          <Loadable {...props}>
            <About />
          </Loadable>
        )}
      />
      <Route
        exact
        path="/skills"
        component={(props: any) => (
          <Loadable {...props}>
            <Skills />
          </Loadable>
        )}
      />
    </Switch>
  );
};

export default Routing;
