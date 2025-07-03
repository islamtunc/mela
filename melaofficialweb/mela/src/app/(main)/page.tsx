// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// Subhanallah, Elhamdulillah, Allahu Ekber, La ilahe illallah
// Estağfirulllah El-Azim
"use client"
import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
     

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Products Page</Card.Title>
              <Card.Text>Manage or view the sports nutrition page.</Card.Text>
              <Button variant="primary" href="/mmavahi">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Courses Page</Card.Title>
              <Card.Text>Manage or view the courses page.</Card.Text>
              <Button variant="primary" href="/mmkinc">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>Manage or view the services page.</Card.Text>
              <Button variant="primary" href="/mmkargeh">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>References</Card.Title>
              <Card.Text>Manage or view the references page.</Card.Text>
              <Button variant="primary" href="/mmwesayit">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>For Developers</Card.Title>
              <Card.Text>Manage or view the developer resources page.</Card.Text>
              <Button variant="primary" href="/mmkedkar">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Site Management</Card.Title>
              <Card.Text>Manage or view the site.</Card.Text>
              <Button variant="primary" href="/malper">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;