'use client'

// Import necessary components and modules
import Image from "next/image";
import Sidebar from "../../components/sidebar";
import { useState } from "react";

// Define the LiveChat component
export default function LiveChat() {
    const [inputText, setInputText] = useState(""); // State to manage input text
    const [messages, setMessages] = useState([
        { id: 1, author: "You", text: "Hi! I've been feeling a bit disconnected lately. Any suggestions on how to reconnect with culture?" },
        { id: 2, author: "Haseeb", text: "I completely understand. One great way is to explore local cultural events. Have you checked out any events in your area?" },
        { id: 3, author: "You", text: "Not yet. Any recommendations for events happening this weekend?" },
        { id: 4, author: "Haseeb", text: "Absolutely! I've curated a list of events for you. Check out your recommendation page, I sent a link with details on some exciting happenings this weekend. Hope you find something you enjoy!" },
        // You can continue the conversation with the user expressing gratitude or asking for more details about the events.
    ]);

    const containerStyle = {
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#fff",
    };

    const headingStyle = {
        fontSize: "1.5em",
        color: "#333",
        marginBottom: "10px",
    };

    const messageAreaStyle = {
        maxHeight: "400px",
        overflowY: "scroll",
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
