import React, { useState, useEffect } from 'react';
import './Clients.css';
import Sidebar from './Sidebar';
import api from '../api';

// Fetch all clients from the backend
const fetchClients = async () => {
    try {
        const response = await api.get('/clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

// Create a new client in the backend
const createClient = async (clientData) => {
    try {
        const response = await api.post('/clients', clientData);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
};

// Delete a client from the backend
const deleteClient = async (id) => {
    try {
        await api.delete(`/clients/${id}`);
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error;
    }
};

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState({
        name: '',
        dob: '',
        contactNumber: '', // Changed from 'contact' to 'contactNumber'
        gp: ''
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadClients = async () => {
            try {
                const clientsData = await fetchClients();
                setClients(clientsData);
            } catch (error) {
                console.error('Error fetching clients:', error);
                setError('Failed to fetch clients');
            }
        };
        loadClients();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient({ ...newClient, [name]: value });
    };

    const addClient = async (e) => {
        e.preventDefault();
        try {
            const addedClient = await createClient(newClient);
            setClients([...clients, addedClient]);
            setNewClient({ name: '', dob: '', contactNumber: '', gp: '' });
            setMessage('Client added successfully');
            setError('');
        } catch (error) {
            console.error('Error adding client:', error);
            setError('Failed to add client');
            setMessage('');
        }
    };

    const handleDeleteClient = async (id) => {
        try {
            await deleteClient(id);
            setClients(clients.filter(client => client._id !== id));
            setMessage('Client deleted successfully');
            setError('');
        } catch (error) {
            console.error('Error deleting client:', error);
            setError('Failed to delete client');
            setMessage('');
        }
    };

    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="main-content">
                <h3>Clients</h3>
                <table className="clients-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>D.O.B</th>
                            <th>Contact Number</th>
                            <th>GP</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client._id}>
                                <td>{client.name}</td>
                                <td>{new Date(client.dob).toLocaleDateString()}</td>
                                <td>{client.contactNumber}</td> {/* Changed from 'contact' to 'contactNumber' */}
                                <td>{client.gp}</td>
                                <td>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDeleteClient(client._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Add New Client</h3>
                <form className="add-client-form" onSubmit={addClient}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={newClient.name} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </label>
                    <label>
                        D.O.B:
                        <input 
                            type="date" 
                            name="dob" 
                            value={newClient.dob} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </label>
                    <label>
                        Contact Number:
                        <input 
                            type="tel" 
                            name="contactNumber" // Changed from 'contact' to 'contactNumber'
                            value={newClient.contactNumber} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </label>
                    <label>
                        GP:
                        <input 
                            type="text" 
                            name="gp" 
                            value={newClient.gp} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </label>
                    <button type="submit">Add Client</button>
                </form>
                {message && <p className="message">{message}</p>}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default Clients;
