// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>Desktop Software Products</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Powerful Desktop Applications</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Desktop software products, such as Computer Algebra Systems (CAS) and productivity tools, are essential for professionals, students, and businesses. These applications offer robust features, offline access, and high performance for complex tasks.
                    <br />
                    <br />
                    <strong>Key Features of Desktop Software</strong>
                    <br />
                    Desktop apps provide advanced functionalities like data analysis, mathematical computation, and document editing. They are highly customizable and can integrate with other tools to streamline workflows.
                    <br />
                    <br />
                    <strong>Conclusion</strong>
                    <br />
                    Desktop products remain vital for tasks that require security, speed, and reliability. Whether for education, engineering, or business, desktop applications like CAS empower users to achieve more efficiently.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Desktop Software"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default page;