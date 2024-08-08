import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import Sidebar from './Sidebar';
import api from '../api';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        date: '',
        time: '',
        name: '',
        status: 'Active'
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await api.get('/appointments');
            setAppointments(response.data);
        } catch (err) {
            console.error('Error fetching appointments:', err);
            setError('Failed to fetch appointments');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value });
    };

    const addAppointment = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/appointments', newAppointment);
            setAppointments([...appointments, response.data]);
            setNewAppointment({ date: '', time: '', name: '', status: 'Active' });
            setMessage('Appointment added successfully');
            setError('');
        } catch (err) {
            console.error('Error adding appointment:', err);
            setError('Failed to add appointment');
            setMessage('');
        }
    };

    const updateAppointmentStatus = async (id, status) => {
        try {
            const response = await api.put(`/appointments/${id}`, { status });
            setAppointments(appointments.map(app => app._id === id ? response.data : app));
            setMessage('Appointment updated successfully');
            setError('');
        } catch (err) {
            console.error('Error updating appointment status:', err);
            setError('Failed to update appointment status');
            setMessage('');
        }
    };

    const deleteAppointment = async (id) => {
        try {
            await api.delete(`/appointments/${id}`);
            setAppointments(appointments.filter(app => app._id !== id));
            setMessage('Appointment deleted successfully');
            setError('');
        } catch (err) {
            console.error('Error deleting appointment:', err);
            setError('Failed to delete appointment');
            setMessage('');
        }
    };

    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="main-content">
                <h3>Overview of Appointments</h3>
                <table className="appointments-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(app => (
                            <tr key={app._id}>
                                <td>{app.date}</td>
                                <td>{app.time}</td>
                                <td>{app.name}</td>
                                <td>
                                    <select
                                        value={app.status}
                                        onChange={(e) => updateAppointmentStatus(app._id, e.target.value)}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Upcoming">Upcoming</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => deleteAppointment(app._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Add New Appointment</h3>
                <form className="add-appointment-form" onSubmit={addAppointment}>
                    <label>
                        Date:
                        <input type="date" name="date" value={newAppointment.date} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Time:
                        <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" value={newAppointment.name} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Status:
                        <select name="status" value={newAppointment.status} onChange={handleInputChange}>
                            <option value="Active">Active</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>
                    <button type="submit">Add Appointment</button>
                </form>
                {message && <p className="message">{message}</p>}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default AdminDashboard;
