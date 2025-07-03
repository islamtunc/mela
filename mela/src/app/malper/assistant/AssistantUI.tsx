// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd







"use client";
import React, { useState, useRef, useEffect } from "react";
import { useAssistant } from "./useAssistant";

const AssistantUI: React.FC = () => {
  const { messages, loading, sendMessage } = useAssistant();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        maxWidth: 400,
        margin: "24px auto",
        background: "#fafbfc",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <h3 style={{ marginBottom: 12 }}> <span>      </span>  Yekazad AI </h3>
      <div
        style={{
          minHeight: 120,
          maxHeight: 200,
          overflowY: "auto",
          marginBottom: 12,
          background: "#fff",
          borderRadius: 4,
          padding: 8,
          border: "1px solid #eee",
        }}
      >
        {messages.length === 0 && (
          <div style={{ color: "#888" }}>Selam Aleykum ,welcome to Yekazad Software Center! How can I help you?</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "6px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background:
                  msg.role === "user" ? "#d1e7dd" : "#e7eaf6",
                color: "#222",
                borderRadius: 12,
                padding: "6px 12px",
                maxWidth: "80%",
                wordBreak: "break-word",
              }}
            >
              {msg.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          disabled={loading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder={loading ? "Assistant is typing..." : "Type your question…"}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default AssistantUI;