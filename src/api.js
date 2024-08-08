import api from './axios';

export const fetchAppointments = async () => {
    try {
        const response = await api.get('/appointments');
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw new Error('Failed to fetch appointments');
    }
};

export const createAppointment = async (appointmentData) => {
    try {
        const response = await api.post('/appointments', appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw new Error('Failed to create appointment');
    }
};

export const updateAppointment = async (id, appointmentData) => {
    try {
        const response = await api.put(`/appointments/${id}`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error updating appointment:', error);
        throw new Error('Failed to update appointment');
    }
};

export const deleteAppointment = async (id) => {
    try {
        await api.delete(`/appointments/${id}`);
    } catch (error) {
        console.error('Error deleting appointment:', error);
        throw new Error('Failed to delete appointment');
    }
};
