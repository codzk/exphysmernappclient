import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// Create an instance of axios
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const fetchAppointments = async () => {
    try {
        const response = await api.get('/api/appointments');
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
};

export const createAppointment = async (appointmentData) => {
    try {
        const response = await api.post('/api/appointments', appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
    }
};

export const updateAppointment = async (id, appointmentData) => {
    try {
        const response = await api.put(`/api/appointments/${id}`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error updating appointment:', error);
        throw error;
    }
};

export const deleteAppointment = async (id) => {
    try {
        await api.delete(`/api/appointments/${id}`);
    } catch (error) {
        console.error('Error deleting appointment:', error);
        throw error;
    }
};

export default api;
