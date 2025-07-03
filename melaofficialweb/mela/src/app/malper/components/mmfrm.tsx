// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ese-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
 "use client";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/mmmpeyam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Could not send message.");
      }
    } catch {
      alert("Could not reach server.");
    }
  };

  return (
    <Form
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        background: "#fff",
        color: "#495057",
        borderRadius: "18px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        padding: "32px 28px",
        border: "1px solid #e9ecef",
      }}
      onSubmit={handleSubmit}
    >
      {submitted && (
        <Alert variant="success" style={{ borderRadius: "12px", textAlign: "center" }}>
          Your message has been sent!
        </Alert>
      )}
      <h2
        className="mb-4 text-center"
        style={{
          fontWeight: 700,
          color: "#28a745",
          letterSpacing: "1px",
          fontSize: "2rem",
        }}
      >
        Contact Us
      </h2>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{ color: "#495057", fontWeight: 500 }}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "1px solid #ced4da",
            boxShadow: "none",
            transition: "border-color 0.2s",
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label style={{ color: "#495057", fontWeight: 500 }}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "1px solid #ced4da",
            boxShadow: "none",
            transition: "border-color 0.2s",
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label style={{ color: "#495057", fontWeight: 500 }}>Your Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "1px solid #ced4da",
            boxShadow: "none",
            resize: "vertical",
            transition: "border-color 0.2s",
          }}
        />
      </Form.Group>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#28a745",
            borderColor: "#28a745",
            borderRadius: "8px",
            padding: "10px 36px",
            fontWeight: 600,
            fontSize: "1.1rem",
            letterSpacing: "1px",
            boxShadow: "0 2px 8px rgba(40,167,69,0.08)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          variant="success"
          type="submit"
        >
          Send
        </Button>
      </div>
      <p className="text-center mt-4" style={{ color: "#6c757d", fontSize: "1rem" }}>
        To contact us, please fill out the form above. We will get back to you as soon as possible.
      </p>
    </Form>
  );
};

export default ContactForm;
