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
        <Navbar.Brand href="/malper">Mela </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Anasayfa</Nav.Link>
            <NavDropdown title="Projelerimiz" id="projects-nav-dropdown">
              <NavDropdown.Item href="/malper/projeler/konut">Konut Projeleri</NavDropdown.Item>
              <NavDropdown.Item href="/malper/projeler/ofis">Ofis & Ticari Alanlar</NavDropdown.Item>
              <NavDropdown.Item href="/malper/projeler/kafe">Kafe & Restoran</NavDropdown.Item>
              <NavDropdown.Item href="/malper/projeler/otel">Otel & Konaklama</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/projeler/renovasyon">Renovasyon</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hizmetlerimiz" id="services-nav-dropdown">
              <NavDropdown.Item href="/malper/hizmetler/tasarim">İç Mekan Tasarımı</NavDropdown.Item>
              <NavDropdown.Item href="/malper/hizmetler/uygulama">Uygulama & Proje Yönetimi</NavDropdown.Item>
              <NavDropdown.Item href="/malper/hizmetler/danisma">Danışmanlık</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/hizmetler/3d">3D Görselleştirme</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/malper/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link href="/malper/ekip">Ekibimiz</Nav.Link>
            <Nav.Link href="/malper/iletisim">İletişim</Nav.Link>
            <NavDropdown title="Blog" id="blog-nav-dropdown">
              <NavDropdown.Item href="/malper/blog/dekorasyon">Dekorasyon Fikirleri</NavDropdown.Item>
              <NavDropdown.Item href="/malper/blog/trendler">Trendler</NavDropdown.Item>
              <NavDropdown.Item href="/malper/blog/ipuclari">İpuçları</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;