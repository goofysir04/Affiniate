
import React from 'react';
import '../../public/css/bootstrap.css';
import '../../public/css/bootstrap-theme.css';
import '../../public/css/introHCI.css';
//import '../../public/css/materialize.css';
import {Link} from 'react-router';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap/';
import {browserHistory} from 'react-router';
import Home from '../pages/home.js';
import Chores from '../pages/chores.js';
import Stats from '../pages/stats.js';



export default class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      eventKey: 1,
      log: "Log In",
      path: "home",
      isLoggedIn: false,
      signup: "Sign Up"

    }
  }


handle(e){
        
        alert("what what!!");
        if(this.state.isLoggedIn == false){
          this.setState({log: "Log Out"});
          this.setState({isLoggedIn: true});
          this.setState({signup: ""});
          this.setState({path: "/"});
        }
        else if(this.state.isLoggedIn == true){
          this.setState({log: "Log In"});
          this.setState({isLoggedIn: false});
          this.setState({signup: "Sign Up"});
          this.setState({path: "home"});

        }
}
__handleHome(e){
  alert("Home Click");
  browserHistory.push("#/home");
}
__handleChore(e){
  console.log("Chore Click");
  browserHistory.push("#/chores");
}

_getSignedInNav(){

  return(<NavSignedIn />);
}

_getSignedIn(){
  return(<StateChangeNav handle={this.handle.bind(this)} path={this.state.path} log={this.state.log} signup={this.state.signup}/>);
}

 

render(){
  let signedIn;
  let signedInNav;

  if(this.state.log === "Log Out"){
    signedIn = this._getSignedIn();
    signedInNav = this._getSignedInNav();
  }
  else{
    signedIn = this._getSignedIn("");
    signedInNav = "";
  }
 

 console.log(this.state.log);
  return (<div>
            <Navbar className="navbar-fixed-top" fluid id="navbar-default-override" collapseOnSelect >
                <Navbar.Header className="navbarColor" id="navHeaderLeft">
                  <Navbar.Toggle className="pull-left navbarColor"/>
                   <Navbar.Brand className="navbarColor">
                    <a id="brand" href="#">AFFINIATE</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse className="navbarColor">
                  {signedInNav}
                   {signedIn}
                  
                  
                 
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
      } 
}

class NavSignedIn extends React.Component{

  render(){
    return(<Nav>
      <NavItem className="navbarColor" eventKey={1} href="#"><Link to="home" id="makeWhite"> Home</Link></NavItem>
      <NavItem className="navbarColor" eventKey={2} href="#"><Link to="chores" id="makeWhite"> Chores</Link></NavItem>
      <NavItem className="navbarColor" eventKey={3} href="#"><Link to="stats" id="makeWhite"> Stats</Link></NavItem>
     </Nav>);
  }
}
function StateChangeNav(props){
 
    return(
      <Nav pullRight className="navbarColor" id="navHeaderRight">
        <NavItem eventKey={1} id="makeWhite" href="#"><span className="glyphicon glyphicon-user"></span> {props.signup}</NavItem>
        <NavItem eventKey={2} id="makeWhite" href="#" onClick={props.handle}><span className="glyphicon glyphicon-log-in"></span><Link to={props.path} id="makeWhite">  {props.log}</Link></NavItem>
      </Nav>);
  }








