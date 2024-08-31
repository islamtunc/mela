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
        <Navbar.Brand href="#home">MorfeUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/kurumsal">Hakkımızda</Nav.Link>
            <NavDropdown title="Hizmetler" id="basic-nav-dropdown">
              <NavDropdown.Item href="/jiriyacekiri/">Projeler</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Referanslar
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Uygulamalar</NavDropdown.Item>

              <NavDropdown.Item href="hizmetler/uygulama">
              ...</NavDropdown.Item>
            </NavDropdown>







            
             

    
          


            <Nav.Link href="/iletisim">İletişim</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default BasicExample;