import api from './axios';

export const fetchClients = async () => {
    try {
        const response = await api.get('/api/clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw new Error('Failed to fetch clients');
    }
};

export const createClient = async (clientData) => {
    try {
        const response = await api.post('/api/clients', clientData);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw new Error('Failed to create client');
    }
};

export const updateClient = async (id, clientData) => {
    try {
        const response = await api.put(`/api/clients/${id}`, clientData);
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw new Error('Failed to update client');
    }
};

export const deleteClient = async (id) => {
    try {
        await api.delete(`/api/clients/${id}`);
    } catch (error) {
        console.error('Error deleting client:', error);
        throw new Error('Failed to delete client');
    }
};
