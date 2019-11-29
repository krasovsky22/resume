import NavigationBar from '@/NavigationBar';
import { delay } from '@/Utils/delay';
import React, { ReactNode, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Col, Container } from 'reactstrap';
import Loading from './Loading';

type LoadableType = {
  children: ReactNode;
};

const DELAY = parseInt(process.env.REACT_APP_LOADING_SCREEN_TIMEOUT || '1000');
//const DELAY = 100000;

const Loadable: React.FC<LoadableType & RouteComponentProps> = props => {
  const { children, ...rest } = props;

  const [show, setShow] = useState(false);
  useEffect(() => {
    delay(DELAY + 500).then(() => setShow(true));
  }, []);

  if (!show) {
    return <Loading loadingTime={DELAY} />;
  }

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
        <Container className={'main-container'} fluid>
          {children}
        </Container>
      </Col>
    </>
  );
};

export default Loadable;
