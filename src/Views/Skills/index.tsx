import React from 'react';
import Sphere from './Sphere';
import { Row, Col } from 'reactstrap';

const Skills: React.FC = () => {
  return (
    <Row>
      <Col md={5}>
        <div className="main-text-zone" style={{ marginTop: '35%' }}>
          <h1>Skills Page</h1>

          <p>
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
          </p>
          <p className="mt-1">
            Fueled by high energy levels and boundless enthusiasm, I’m easily
            inspired and more then willing to follow my fascinations wherever
            they take me. I’m passionate, expressive, multi-talented spirit with
            a natural ability to entertain and inspire. I’m never satisfied to
            just come up with ideas. Instead I have an almost impulsive need to
            act on them.
          </p>
          <p>
            My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study and artistic endeavors. I’m a fast learner,
            able to pick up new skills and juggle different projects and roles
            with relative ease. I like to develop expertise in a number of areas
            over the course of my life and career.
          </p>
        </div>
      </Col>
      <Col md={7}>
        <Sphere />
      </Col>
    </Row>
  );
};

export default Skills;
