import Logo from '@components/Logo/AnimatedLogo';
import '@fonts/ArchivoNarrow-Bold.ttf';
import Loadable from '@router/Loadable';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import AnimatedTextContainter from './AnimatedTextContainer';
import './Home.scss';
import { Row, Col } from 'reactstrap';

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <Loadable {...props}>
      <Row className="vh-100">
        <Col className="my-auto" md={5} xs={6}>
          <AnimatedTextContainter />
        </Col>
        <Col className="my-auto" md={7} xs={6}>
          <div className="main-logo">
            <Logo isAnimated={true} />
          </div>
        </Col>
      </Row>
    </Loadable>
  );
};

export default Home;
