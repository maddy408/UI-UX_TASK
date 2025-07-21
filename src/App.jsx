import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! How can I assist you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const keywordResponses = {
    help: "Sure! I'm here to help. What do you need assistance with?",
    pricing: "Our pricing starts at $10/month. Visit our pricing page for more details.",
    support: "You can reach support via email: support@example.com",
    contact: "You can contact us at +91-98765-43210 or contact@example.com.",
    features: "We offer 24/7 AI chatbot, multilingual support, and quick integration.",
    refund: "We offer a 7-day refund policy. Please raise a ticket to initiate it.",
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage = { text: input, sender: "user", time: now };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    const keyword = input.toLowerCase();
    const matchedResponse = Object.keys(keywordResponses).find((key) =>
      keyword.includes(key)
    );

    setTimeout(() => {
      const botMessage = {
        text: matchedResponse
          ? keywordResponses[matchedResponse]
          : "Sorry, I didn’t understand that. Please try asking about 'pricing', 'help', or 'support'.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full h-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col md:h-[600px] md:max-w-[420px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-xl font-bold flex justify-between items-center">
          <span>💬 Live Support</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="flex items-end gap-2">
                {msg.sender === "bot" && (
                  <img
                    src="https://i.imgur.com/7k12EPD.png"
                    alt="bot"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div
                  className={`max-w-[70%] px-4 py-2 text-base rounded-2xl shadow ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-black"
                      : "bg-white border text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <img
                    src="https://i.imgur.com/hY2H0ya.png"
                    alt="user"
                    className="w-8 h-8 rounded-full"
                  />
                )}
              </div>
              <span className="text-xs text-gray-400">
                {msg.time}
              </span>
            </div>
          ))}

          {typing && (
            <div className="text-sm text-gray-500 italic animate-pulse">
              Bot is typing...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white flex gap-2 items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 px-4 py-2 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
            onClick={handleSend}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}
