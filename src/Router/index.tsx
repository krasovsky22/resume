import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';
import NavigationBar from '@/NavigationBar';
import { Col, Container } from 'reactstrap';

const Routing: React.FC = () => {
  //loadable component
  const Loadable = (loader: any) => {
    const Component = lazy(loader);

    return (props: any) => (
      <Suspense fallback={<> Loading </>}>
        <NavigationBar {...props} />
        <Col>
          <div className="tags">
            <div className="tags top-tags">{'<html>'}</div>
            <div className="tags top-tags mt-5 ml-5">{'<body>'}</div>
          </div>
          <div className="tags">
            <div className="tags bottom-tags mb-5 ml-5">{'</body>'}</div>
            <div className="tags bottom-tags">{'</html>'}</div>
          </div>
          <Container className={'main-container'}>
            <Component {...props} />
          </Container>
        </Col>
      </Suspense>
    );
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Loadable(() => import('@/Views/Home'))}
      />
      <Route
        exact
        path="/about"
        component={Loadable(() => import('@/Views/About'))}
      />
    </Switch>
  );
};

export default Routing;
