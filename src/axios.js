
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);


// Response interceptor to handle errors globally
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle specific status codes or general error handling here
        if (error.response && error.response.status === 401) {
            // For example, if you get a 401 error, you might want to log the user out
            localStorage.removeItem('token');
            window.location.href = '/admin-login';
        }
        return Promise.reject(error);
    }
);

export default api;
