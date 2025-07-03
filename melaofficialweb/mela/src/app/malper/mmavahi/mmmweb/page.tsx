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
        flexDirection: "column", // mobilde dikey hizalama
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
          <Card.Title style={{ fontSize: "1.5rem" }}>Web Applications</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>The Impact of Web Apps</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Web applications have become essential tools for businesses, education, and daily life. They enable users to access services and information from anywhere with an internet connection, providing flexibility and convenience.
                    <br />
                    <br />
                    <strong>Advantages of Web Applications</strong>
                    <br />
                    Web apps are platform-independent, easy to update, and can scale to serve millions of users. They support collaboration, real-time data access, and seamless integration with other digital services.
                    <br />
                    <br />
                    <strong>Conclusion</strong>
                    <br />
                    Web applications are a cornerstone of the modern digital world, empowering users and organizations to connect, collaborate, and innovate efficiently.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Sağ Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Web Applications"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Alert ve ForYouFeed Alt Kısma Taşındı */}
     
    </div>
  );
}

export default page;