// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Mela Programming Language</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Home</Nav.Link>
            <NavDropdown title="Documentation" id="documentation-nav-dropdown">
              <NavDropdown.Item href="/malper/dokumantasyon/getting-started">Getting Started</NavDropdown.Item>
              <NavDropdown.Item href="/malper/dokumantasyon/reference">Language Reference</NavDropdown.Item>
              <NavDropdown.Item href="/malper/dokumantasyon/faq">FAQ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/malper/cevrimici-derleyici">Online Compiler</Nav.Link>
            <NavDropdown title="Examples" id="examples-nav-dropdown">
              <NavDropdown.Item href="/malper/ornekler/basics">Basics</NavDropdown.Item>
              <NavDropdown.Item href="/malper/ornekler/advanced">Advanced</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/malper/topluluk">Community</Nav.Link>
            <Nav.Link href="/malper/blog">Blog</Nav.Link>
            <Nav.Link href="/malper/hakkimizda">About</Nav.Link>
            <Nav.Link href="/malper/iletisim">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;