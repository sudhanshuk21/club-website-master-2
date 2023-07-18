
import '../MyCSS/Header.css'
import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import  { Link } from "react-router-dom";
import { Navbar, Nav, Container,Button} from 'react-bootstrap';
function myFunction() {
  document.getElementById("demo").style.display = "none";
}
export default function Header(props) {
  return (
    <>
    <div>
      <h2 className='pop' id="demo">Open in Desktop for best <button onClick={myFunction}><CloseButton/></button>experience</h2>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home"><img id='iitk-logo' src={props.snt} alt="IITK" />
        <img id='aero-logo' src={props.aero} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to = {"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to = {"/Projects"}>Projects</Nav.Link>
            <Nav.Link as={Link} to = {"/activities"}>Activities</Nav.Link>
            <Nav.Link as={Link} to = {"/team"}>Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
