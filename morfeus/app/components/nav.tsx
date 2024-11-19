// Bismillahirahmanirahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
function BasicExample() {
  return (
    <Navbar style={{background:"#FFC0CB"}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Antolojîya Îslam ê</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Malper</Nav.Link>
            <Nav.Link href="/kurumsal">Derbare</Nav.Link>
            <NavDropdown title="Pirtukxane" id="basic-nav-dropdown">
              <NavDropdown.Item href="/jiriyacekiri/">Qur'an'a pîroz</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Hedîs
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Tefsir</NavDropdown.Item>
  



              <NavDropdown.Item href="hizmetler/uygulama">
              Fikih</NavDropdown.Item>
        
              <NavDropdown.Item href="hizmetler/uygulama">
              Kelam</NavDropdown.Item>
            

              <NavDropdown.Item href="hizmetler/uygulama">
              Şerhên melayan</NavDropdown.Item>
          </NavDropdown>



            
             

    
          


            <Nav.Link href="/iletisim">Têkili</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default BasicExample;