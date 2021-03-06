
import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/introHCI.css';

import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap/';


export default class WelcomeNavigation extends React.Component{
  handleOnClick(e){
  console.log(e);

}
__handle_login(){
    console.log("Login clicked!");
  this.props.showLogin(true);
}
  


render(){
  return (<div>
            <Navbar className="navbar-fixed-top" fluid id="navbar-default-override" collapseOnSelect >
                <Navbar.Header className="navbarColor" id="navHeaderLeft">
                  <Navbar.Toggle className="pull-left navbarColor"/>
                   <Navbar.Brand className="navbarColor">
                    <a id="brand" href="#">AFFINIATE</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse className="navbarColor">
                  <Nav onSelect={this.handleSelect}>
                  
                  </Nav>
                  <Nav pullRight className="navbarColor" id="navHeaderRight">
                    
                    <NavItem eventKey={2} id="makeWhite" href="#" onClick={this.__handle_login.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Log In</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
      } 
    }


