import React, { useState } from 'react';
import './Clients.css';
import Sidebar from './Sidebar';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState({
        name: '',
        dob: '',
        contact: '',
        gp: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient({ ...newClient, [name]: value });
    };

    const addClient = (e) => {
        e.preventDefault();
        setClients([...clients, { ...newClient, id: clients.length + 1 }]);
        setNewClient({ name: '', dob: '', contact: '', gp: '' });
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
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.name}</td>
                                <td>{client.dob}</td>
                                <td>{client.contact}</td>
                                <td>{client.gp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Add New Client</h3>
                <form className="add-client-form" onSubmit={addClient}>
                    <label>
                        Name:
                        <input type="text" name="name" value={newClient.name} onChange={handleInputChange} required />
                    </label>
                    <label>
                        D.O.B:
                        <input type="date" name="dob" value={newClient.dob} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Contact Number:
                        <input type="tel" name="contact" value={newClient.contact} onChange={handleInputChange} required />
                    </label>
                    <label>
                        GP:
                        <input type="text" name="gp" value={newClient.gp} onChange={handleInputChange} required />
                    </label>
                    <button type="submit">Add Client</button>
                </form>
            </div>
        </div>
    );
};

export default Clients;
