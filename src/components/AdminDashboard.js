import React, { useEffect, useState } from 'react';
import api from '../axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/appointments');
                setAppointments(response.data);
            } catch (err) {
                setError('An error occurred while fetching data. Please try again.');
                console.error('Fetch error:', err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment._id}>
                        {appointment.name} - {appointment.date} at {appointment.time} - {appointment.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
