import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Home from '@/Views/Home';
import NavigationBar from './NavigationBar';

const App: React.FC = () => (
  <Container fluid className={'fill'}>
    <Row className={'fill'}>
      <NavigationBar />
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
          <Home />
        </Container>
      </Col>
    </Row>
  </Container>
);

export default App;
