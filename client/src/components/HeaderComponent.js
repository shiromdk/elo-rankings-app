import React,{  Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



export default class Header extends Component{

  render(){
    return(
      navbarInstance
    );
  }

};

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">ELO Rankings System</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
      <LinkContainer to="/leaderboard">
        <NavItem eventKey={1} href="/leaderboard">Leaderboards</NavItem>
      </LinkContainer>
      <NavDropdown eventKey={2} title="Match Management" id="basic-nav-dropdown">
        <LinkContainer to="/addmatch">
          <NavItem eventKey={2.1} href="/addmatch">Add Match</NavItem>
        </LinkContainer>
      </NavDropdown>
      <NavDropdown eventKey={3} title="Player Management" id="basic-nav-dropdown">
        <LinkContainer to="/addplayers">
          <NavItem eventKey={3.1} href="/addplayers">Add Players</NavItem>
        </LinkContainer>
        <LinkContainer to="/editplayers">
          <NavItem eventKey={3.2} href="/editplayers">Edit Players</NavItem>
        </LinkContainer>
    </NavDropdown>
  </Nav>
    </Navbar.Collapse>

  </Navbar>
);
