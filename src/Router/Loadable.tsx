import React, { ReactNode } from 'react';

import { RouteComponentProps } from 'react-router';
import NavigationBar from '@/NavigationBar';
import { Col, Container } from 'reactstrap';
import { delay } from '@/Utils/delay';

type LoadableType = {
  children: ReactNode;
};

const Loadable: React.FC<LoadableType & RouteComponentProps> = props => {
  const { children, ...rest } = props;
  return (
    <>
      <NavigationBar {...rest} />
      <Col>
        <div className="tags">
          <div className="tags top-tags">{'<html>'}</div>
          <div className="tags top-tags mt-5 ml-5">{'<body>'}</div>
        </div>
        <div className="tags">
          <div className="tags bottom-tags mb-5 ml-5">{'</body>'}</div>
          <div className="tags bottom-tags">{'</html>'}</div>
        </div>
        <Container className={'main-container'}>{children}</Container>
      </Col>
    </>
  );
};

export default Loadable;
