import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        date: '',
        time: '',
        name: '',
        status: 'Active'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value });
    };

    const addAppointment = (e) => {
        e.preventDefault();
        setAppointments([...appointments, { ...newAppointment, id: appointments.length + 1 }]);
        setNewAppointment({ date: '', time: '', name: '', status: 'Active' });
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img src="/path/to/logo.png" alt="ExPhys Clinic Logo" />
                </div>
                <h2>Welcome Admin!</h2>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Clients</li>
                        <li>Inbox</li>
                        <li>Log Out</li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h3>Overview of Appointments</h3>
                <table className="appointments-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(app => (
                            <tr key={app.id}>
                                <td>{app.date}</td>
                                <td>{app.time}</td>
                                <td>{app.name}</td>
                                <td>
                                    <select
                                        value={app.status}
                                        onChange={(e) => {
                                            const updatedStatus = e.target.value;
                                            setAppointments(appointments.map(a => a.id === app.id ? { ...a, status: updatedStatus } : a));
                                        }}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Upcoming">Upcoming</option>
                                        <option value="Completed">Completed</option>
                                    </select>
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
            </div>
        </div>
    );
};

export default AdminDashboard;
