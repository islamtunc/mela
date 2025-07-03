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
          <Card.Title style={{ fontSize: "1.5rem" }}>Mobile Applications</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>The Power of Mobile Apps</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Mobile applications have revolutionized the way we live, work, and communicate. From productivity and health to entertainment and education, mobile apps provide instant access to essential tools and services anytime, anywhere.
                    <br />
                    <br />
                    <strong>Key Benefits of Mobile Apps</strong>
                    <br />
                    Mobile apps offer user-friendly interfaces, real-time notifications, and seamless integration with device features. They enable personalized experiences and help users stay connected and productive on the go.
                    <br />
                    <br />
                    <strong>Conclusion</strong>
                    <br />
                    Mobile applications are a driving force in the digital era, empowering individuals and businesses to achieve more with convenience and efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Mobile Apps"
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