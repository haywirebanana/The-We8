'use client'

// Import necessary components and modules
import Image from "next/image";
import Sidebar from "../../components/sidebar";
import { useState } from "react";

// Define the LiveChat component
export default function LiveChat() {
    const [inputText, setInputText] = useState(""); // State to manage input text
    const [messages, setMessages] = useState([
        { id: 1, author: "You", text: "Hi there! I need some help on my Resume!" },
        { id: 2, author: "Celine", text: "Hello! Are you available on February 4? I would love to see what you have." },
        { id: 3, author: "You", text: "Yes, I'm available on February 4. What time works best for you?" },
        { id: 4, author: "Celine", text: "Great! How about 2:00 PM? Does that work for you?" },
        { id: 5, author: "You", text: "Sure, 2:00 PM works for me. Where would you like to meet?" },
    ]);

    const containerStyle = {
        width: "100%",
        minHeight: "70%",
        padding: "3rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor:"#fff",
    };

    const headingStyle = {
        fontSize: "1.5em",
        color: "#333",
        marginBottom: "10px",
    };

    const messageAreaStyle = {
        overflowY: "scroll",
        height:'80%',
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
    };

    const userMessageStyle = {
        color: "#007bff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
    };

    const celineMessageStyle = {
        color: "#28a745",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
    };

    const removeButtonStyle = {
        marginLeft: "10px",
        padding: "5px",
        backgroundColor: "#ff5b5b",
        color: "white",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
    };

    const inputAreaStyle = {
        display: "flex",
    };

    const inputFieldStyle = {
        flex: 1,
        padding: "10px",
        marginRight: "10px",
        border: "1px solid #ddd",
        borderRadius: "3px",
    };

    const sendButtonStyle = {
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== "") {
            setMessages([...messages, { id: Date.now(), author: "You", text: inputText }]);
            setInputText("");
        }
    };

    const handleRemoveMessage = (id: number) => {
        setMessages(messages.filter((message) => message.id !== id));
    };

    return (
        <div className="flex flex-row w-full flex-1 min-h-screen bg-green">
            <Sidebar />

            {/* Messaging container */}
            <div style={containerStyle}>
                <h2 style={headingStyle}>Messaging with Celine </h2>

                {/* Message area */}
                <div style={messageAreaStyle}>
                    {/* Previous messages go here */}
                    {messages.map((message) => (
                        <div key={message.id} style={message.author === "You" ? userMessageStyle : celineMessageStyle}>
                            <div>
                                <strong>{message.author}:</strong> {message.text}
                            </div>
                            {message.author === "You" && (
                                <button style={removeButtonStyle} onClick={() => handleRemoveMessage(message.id)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Input area */}
                <div style={inputAreaStyle}>
                    <input type="text" placeholder="Type your message..." style={inputFieldStyle} value={inputText} onChange={handleInputChange} />
                    <button style={sendButtonStyle} onClick={handleSendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
