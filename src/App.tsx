import React from 'react';
import { Container, Row } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

import Routing from '@router';

const App: React.FC = () => (
  <Container fluid className={'fill'}>
    <Row className={'fill'}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Row>
  </Container>
);

export default App;
