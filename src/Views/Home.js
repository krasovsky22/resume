import React from 'react';
import { Container, Nav, Navbar, NavItem, NavLink } from "reactstrap";

function App() {
  return (
    <div className='d-flex'>
      <Navbar style={{ marginTop: '45%' }}>
        <Nav vertical={true}>
          <NavItem>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
        Hello World
      </Container>
    </div>
  );
}

export default App;
