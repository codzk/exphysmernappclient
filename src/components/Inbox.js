import React, { useState, useEffect } from 'react';
import './Inbox.css';
import Sidebar from './Sidebar';
import api from '../api';

const Inbox = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const response = await api.get('/contactMessages');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        loadMessages();
    }, []);

    const handleSelectMessage = (msg) => {
        setSelectedMessage(msg);
    };

    const handleDeleteMessage = async (msgId) => {
        try {
            await api.delete(`/contactMessages/${msgId}`);
            setMessages(messages.filter(msg => msg._id !== msgId));
            setSelectedMessage(null);
        } catch (error) {
            console.error('Error deleting message:', error);
        }
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
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.length > 0 ? (
                            messages.map(msg => (
                                <tr key={msg._id} onClick={() => handleSelectMessage(msg)}>
                                    <td>{new Date(msg.date).toLocaleString()}</td>
                                    <td>{msg.email}</td>
                                    <td>{msg.phone}</td>
                                    <td>{msg.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No messages to display</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {selectedMessage && (
                    <div className="message-detail">
                        <h4>From: {selectedMessage.email}</h4>
                        <p><strong>Email:</strong> {selectedMessage.email}</p>
                        <p><strong>Phone:</strong> {selectedMessage.phone}</p>
                        <p><strong>Date:</strong> {new Date(selectedMessage.date).toLocaleString()}</p>
                        <p><strong>Message:</strong> {selectedMessage.message}</p>
                        <button onClick={() => handleDeleteMessage(selectedMessage._id)}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Inbox;
