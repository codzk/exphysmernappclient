import React, { useState, useEffect } from 'react';
import './Clients.css';
import Sidebar from './Sidebar';
import api from '../api';

const fetchClients = async () => {
    try {
        const response = await api.get('/clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

const createClient = async (clientData) => {
    try {
        const response = await api.post('/clients', clientData);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
};

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
        contact: '',
        gp: ''
    });

    useEffect(() => {
        const loadClients = async () => {
            try {
                const clientsData = await fetchClients();
                setClients(clientsData);
            } catch (error) {
                console.error('Error fetching clients:', error);
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
            setNewClient({ name: '', dob: '', contact: '', gp: '' });
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };

    const handleDeleteClient = async (id) => {
        try {
            await deleteClient(id);
            setClients(clients.filter(client => client._id !== id));
        } catch (error) {
            console.error('Error deleting client:', error);
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
                                <td>{client.contact}</td>
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
                            name="contact" 
                            value={newClient.contact} 
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
            </div>
        </div>
    );
};

export default Clients;
