import React, { useRef } from 'react';
import { Button } from "reactstrap";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    // If the input is empty, return early
    if (!userMessage) return;

    // Clear the input field
    inputRef.current.value = "";

    // Add the user's message to the chat history
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    // Simulate a bot response after 600ms
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
    }, 600);

    // Generate a bot response
    generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <Button type="submit" className="material-symbols-rounded">
        arrow_upward
      </Button>
    </form>
  );
};

export default ChatForm;