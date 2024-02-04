'use client'

// Import necessary components and modules
import Image from "next/image";
import Sidebar from "../../components/sidebar";
import { useState } from "react";

// Define the LiveChat component
export default function LiveChat() {
    const [inputText, setInputText] = useState(""); // State to manage input text
    const [messages, setMessages] = useState([
        { id: 1, author: "You", text: "Hi there! I need some advice about things to do with my family." },
        { id: 2, author: "Armin", text: "Of course! I'm happy to help. What specific advice are you looking for?" },
        { id: 3, author: "You", text: "I'm wondering about some places to visit around town. Any recommendations?" },
        { id: 4, author: "Armin", text: "Sure, I can help with that. Could you let me know which area you're located in?" },
        { id: 5, author: "You", text: "I'm in the Royal Oak neighborhood, but I'm willing to drive around." },
        { id: 6, author: "Armin", text: "Got it. I'll check and get back to you with some recommendations shortly." },
        { id: 7, author: "Armin", text: "Look at your recommendations in your journal! I sent some links"}
        // You can continue the conversation with Armin providing school recommendations.  
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
                <h2 style={headingStyle}>Messaging with Armin </h2>

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
