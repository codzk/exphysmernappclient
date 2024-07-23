import React from "react";
import './AdminLogin.css';
import adminLogo from '../assets/logo.png';

const AdminLogin = () => {
    return (
        <div className="admin-login">
            <div className="admin-logo">
                <img src={adminLogo} alt="Exphys Clinic Logo"/>
            </div>

            <div className="login-container">
                <h2>Admin Log In</h2>
                <form>
                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Password:</label>
                    <input type="password" name="password" required/>

                    <button type="submit">Submit</button>
                </form>
            </div>


        </div>
    );
};

export default AdminLogin;