import Loadable from '@/Router/Loadable';
import htmlLogo from '@assets/html5-logo.png';
import javascriptLogo from '@assets/javascript-logo.png';
import phpLogo from '@assets/php7-logo.png';
import reactLogo from '@assets/react-logo.png';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './About.scss';
import { Row, Col } from 'reactstrap';

const About: React.FC<RouteComponentProps> = props => {
  return (
    <Loadable {...props}>
      <Row className="vh-100">
        <Col className="my-auto">
          <div className="main-text-zone">
            <h1>About Me</h1>
            <p>
              Professionally connected with the web development industry and
              information technology for many years.
            </p>
            <p className="mt-1">
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of outdoor activities, TV series
              and, MMORPG games. Passion about learning new technologies.
            </p>
            <p>
              Interested in working on ambitious projects with positive people.
            </p>
          </div>
        </Col>
        <Col className="my-auto">
          <div className="position-relative">
            <section className="pyramid">
              <div className="about-logo-php">
                <img src={phpLogo} alt="php7-logo" />
              </div>
              <div className="about-logo-javascript">
                <img src={javascriptLogo} alt="javascript logo" />
              </div>
              <div className="about-logo-react">
                <img
                  src={reactLogo}
                  width="150px"
                  height="150px"
                  alt="react logo"
                />
              </div>
              <div className="about-logo-html">
                <img src={htmlLogo} alt="html5 logo" />
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </Loadable>
  );
};

export default About;
