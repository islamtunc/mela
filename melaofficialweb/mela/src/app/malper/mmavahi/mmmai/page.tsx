// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
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
          <Card.Title style={{ fontSize: "1.5rem" }}>AI Products</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>The Importance of Artificial Intelligence</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Artificial Intelligence (AI) is transforming industries by automating processes, enhancing decision-making, and enabling innovative solutions. AI-powered products are now integral to healthcare, finance, education, and many other sectors.
                    <br />
                    <br />
                    <strong>Key Benefits of AI Products</strong>
                    <br />
                    AI solutions can analyze large datasets rapidly, identify patterns, and provide personalized recommendations. This leads to increased efficiency, cost savings, and improved user experiences.
                    <br />
                    <br />
                    <strong>Conclusion</strong>
                    <br />
                    AI products are not just a trend—they are shaping the future by driving innovation, improving productivity, and solving complex problems across various domains.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Artificial Intelligence"
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