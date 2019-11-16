import React from 'react';
import { Container, Nav, Navbar, NavItem, NavLink } from "reactstrap";
import Home from "@/Views/Home";

function App() {
  return (
    <div className='d-flex'>
      <Navbar className='sidebar-nav'>
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
        <div className='tags top-tags'>{'<html>'}</div>
        <div className='tags top-tags mt-5 ml-5'>{'<body>'}</div>
        <Home/>
        <div className='tags bottom-tags mb-5 ml-5'>{'</body>'}</div>
        <div className='tags bottom-tags'>{'</html>'}</div>
      </Container>
    </div>
  );
}

export default App;
