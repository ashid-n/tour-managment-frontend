import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./chat-bot.css";
import ChatForm from "./chatForm.jsx";
import ChatMessage from "./chatMessage.jsx";
import { VITE_API_URL } from "../../Constant/Constant.js";

console.log("Imported API URL:", VITE_API_URL);

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history) => {
    if (!VITE_API_URL) {
      console.error("API URL is missing. Check your .env file.");
      return;
    }

    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    // Format chat history for API request
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    try {
      const response = await fetch(VITE_API_URL, requestOptions);
      console.log("API Response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Something went wrong!");
      }

      const data = await response.json();
      if (
        data?.candidates?.length > 0 &&
        data.candidates[0]?.contents?.parts?.length > 0
      ) {
        const apiResponseText = data.candidates[0].contents.parts[0].text
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .trim();
        updateHistory(apiResponseText);
      } else {
        throw new Error("Invalid API response format.");
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      updateHistory("Sorry, I'm having trouble responding right now.");
    }
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="container-chat_bot">
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
            >
              <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5z" />
            </svg>
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
            >
              <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5z" />
            </svg>
            <p className="message-text">
              Hey there👋 <br /> How can I help you today?
            </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
