import React, { useState } from "react";
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppoinment, setNewAppointment] = useState({
        date: '',
        time: '',
        name: '',
        status: 'Active'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value});
    };

    const addAppointment = (e) => {
        e.preventDefault()
    }
}



