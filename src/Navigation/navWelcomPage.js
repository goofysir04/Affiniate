
import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/introHCI.css';

import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap/';


export default class WelcomeNavigation extends React.Component{
  handleSelect(e){
  console.log(e);
}

render(){
  return (<div>
            <Navbar fluid id="navbar-default-override" collapseOnSelect >
                <Navbar.Header className="navbarColor">
                  <Navbar.Toggle className="pull-left navbarColor"/>
                   <Navbar.Brand className="navbarColor">
                    <a id="brand" href="#">AFFINIATE</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse className="navbarColor">
                  <Nav onSelect={this.handleSelect}>
                  
                  </Nav>
                  <Nav pullRight className="navbarColor">
                    <NavItem eventKey={1} id="makeWhite" href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</NavItem>
                    <NavItem eventKey={2} id="makeWhite" href="#"><span className="glyphicon glyphicon-log-in" ></span> Log In</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
      } 
    }

