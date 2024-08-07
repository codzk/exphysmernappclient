import React, { useEffect, useState } from 'react';
import { fetchAppointments, createAppointment, updateAppointment, deleteAppointment } from '../api';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ name: '', date: '', time: '' });

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const data = await fetchAppointments();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        getAppointments();
    }, []);

    const handleAddAppointment = async (e) => {
        e.preventDefault();
        try {
            const addedAppointment = await createAppointment(newAppointment);
            setAppointments([...appointments, addedAppointment]);
            setNewAppointment({ name: '', date: '', time: '' });
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    const handleDeleteAppointment = async (id) => {
        try {
            await deleteAppointment(id);
            setAppointments(appointments.filter(appointment => appointment._id !== id));
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleAddAppointment}>
                <input
                    type="text"
                    value={newAppointment.name}
                    onChange={(e) => setNewAppointment({ ...newAppointment, name: e.target.value })}
                    placeholder="Name"
                />
                <input
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                />
                <input
                    type="time"
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                />
                <button type="submit">Add Appointment</button>
            </form>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment._id}>
                        {appointment.name} - {appointment.date} - {appointment.time}
                        <button onClick={() => handleDeleteAppointment(appointment._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
