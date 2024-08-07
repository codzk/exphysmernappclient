import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const fetchAppointments = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/appointments`);
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
};

export const createAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/appointments`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
    }
};

export const updateAppointment = async (id, appointmentData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/appointments/${id}`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error updating appointment:', error);
        throw error;
    }
};

export const deleteAppointment = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/api/appointments/${id}`);
    } catch (error) {
        console.error('Error deleting appointment:', error);
        throw error;
    }
};
