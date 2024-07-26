// src/components/Inbox.js
import React, { useState } from 'react';
import './Inbox.css';
import Sidebar from './Sidebar';

const Inbox = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleSelectMessage = (msg) => {
        setSelectedMessage(msg);
    };

    const handleDeleteMessage = (msgId) => {
        setMessages(messages.filter(msg => msg.id !== msgId));
        setSelectedMessage(null);
    };

    return (
        <div className="admin-inbox">
            <Sidebar />
            <div className="main-content">
                <h3>Inbox</h3>
                <table className="messages-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.length > 0 ? (
                            messages.map(msg => (
                                <tr key={msg.id} onClick={() => handleSelectMessage(msg)}>
                                    <td>{msg.date}</td>
                                    <td>{msg.name}</td>
                                    <td>{msg.email}</td>
                                    <td>{msg.phone}</td>
                                    <td>{msg.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No messages to display</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {selectedMessage && (
                    <div className="message-detail">
                        <h4>From: {selectedMessage.name}</h4>
                        <p><strong>Email:</strong> {selectedMessage.email}</p>
                        <p><strong>Phone Number:</strong> {selectedMessage.phone}</p>
                        <p><strong>Date:</strong> {selectedMessage.date}</p>
                        <p><strong>Message:</strong> {selectedMessage.message}</p>
                        <button onClick={() => handleDeleteMessage(selectedMessage.id)}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Inbox;
