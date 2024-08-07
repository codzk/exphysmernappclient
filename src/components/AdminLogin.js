import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css";
import api from '../axios'; // Ensure this points to your axios instance
import adminLogo from '../assets/logo.png';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/admin/login', { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/admin-dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="admin-login">
            <div className="admin-logo">
                <img src={adminLogo} alt="Exphys Clinic Logo"/>
            </div>
            <div className="login-container">
                <h2>Admin Log In</h2>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Submit</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default AdminLogin;
