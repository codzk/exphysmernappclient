import React, { useState, useEffect } from "react";
import api from "../axios";
import './AdminDashboard.css';

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

    const deleteAppointment = async (id) => {
        try {
            await api.delete(`/appointments/${id}`);
            setAppointments(appointments.filter(appointment => appointment._id !== id));
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
            <h2>Admin Dashboard</h2>
            <form onSubmit={addAppointment}>
                <input
                    type="date"
                    name="date"
                    value={newAppointment.date}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={newAppointment.time}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newAppointment.name}
                    onChange={handleInputChange}
                    required
                />
                <select
                    name="status"
                    value={newAppointment.status}
                    onChange={handleInputChange}
                >
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <button type="submit">Add Appointment</button>
            </form>
            {message && <p className="message">{message}</p>}
            {error && <p className="error">{error}</p>}
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment._id}>
                        {appointment.date} {appointment.time} - {appointment.name} ({appointment.status})
                        <button onClick={() => deleteAppointment(appointment._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
