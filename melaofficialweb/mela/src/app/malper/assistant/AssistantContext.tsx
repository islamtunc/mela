// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
"use client";
import React, { createContext, useState, useContext } from "react";
import { AssistantMessage } from "./types";

interface AssistantContextProps {
  messages: AssistantMessage[];
  loading: boolean;
  sendMessage: (msg: string) => Promise<void>;
}

const AssistantContext = createContext<AssistantContextProps | undefined>(undefined);

export const AssistantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg: string) => {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || "Sorry, I couldn't generate a response." },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, there was an error contacting the AI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AssistantContext.Provider value={{ messages, loading, sendMessage }}>
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistantContext = () => {
  const context = useContext(AssistantContext);
  if (!context) throw new Error("useAssistantContext must be used within AssistantProvider");
  return context;
};