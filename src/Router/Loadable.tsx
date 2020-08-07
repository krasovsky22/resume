import NavigationBar from '@/NavigationBar';
import { delay } from '@/Utils/delay';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Col, Container } from 'reactstrap';
import Loading from './Loading';

type LoadableType = RouteComponentProps & {
  children: React.ReactChild;
};

const DELAY = parseInt(process.env.REACT_APP_LOADING_SCREEN_TIMEOUT || '250');
//const DELAY = 100000;

const Loadable: React.FC<LoadableType> = (props: LoadableType) => {
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
      <Col className="position-relative h-100">
        <div className="tags top-tags">
          <div className="tags">{'<html>'}</div>
          <div className="tags mt-5 ml-5">{'<body>'}</div>
        </div>
        <div className="tags bottom-tags">
          <div className="tags b-5 ml-5">{'</body>'}</div>
          <div className="tags">{'</html>'}</div>
        </div>
        <Container className={'main-container'} fluid>
          {children}
        </Container>
      </Col>
    </>
  );
};

export default Loadable;
