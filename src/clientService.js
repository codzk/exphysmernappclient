import api from './axios';

export const fetchClients = async () => {
    try {
        const response = await api.get('/api/clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

export const createClient = async (clientData) => {
    try {
        const response = await api.post('/clients', clientData);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
};

export const updateClient = async (id, clientData) => {
    try {
        const response = await api.put(`/clients/${id}`, clientData);
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw error;
    }
};

export const deleteClient = async (id) => {
    try {
        await api.delete(`/clients/${id}`);
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error;
    }
};
