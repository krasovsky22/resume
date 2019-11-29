import React from 'react';
import Sphere from './Sphere';
import { Row, Col } from 'reactstrap';

const Skills: React.FC = () => {
  return (
    <Row>
      <Col md={6}>
        <div className="main-text-zone">
          <h1>Skills Page</h1>
        </div>
      </Col>
      <Col md={6}>
        <Sphere />
      </Col>
    </Row>
  );
};

export default Skills;
