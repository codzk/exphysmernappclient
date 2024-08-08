import api from './axios';

// Fetch all clients from the backend
export const fetchClients = async () => {
    try {
        const response = await api.get('/clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error; // Re-throwing the error to be handled by the calling function
    }
};

// Create a new client in the backend
export const createClient = async (clientData) => {
    try {
        const response = await api.post('/clients', clientData);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw error; // Re-throwing the error to be handled by the calling function
    }
};

// Update an existing client in the backend
export const updateClient = async (id, clientData) => {
    try {
        const response = await api.put(`/clients/${id}`, clientData);
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw error; // Re-throwing the error to be handled by the calling function
    }
};

// Delete a client from the backend
export const deleteClient = async (id) => {
    try {
        await api.delete(`/clients/${id}`);
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error; // Re-throwing the error to be handled by the calling function
    }
};
