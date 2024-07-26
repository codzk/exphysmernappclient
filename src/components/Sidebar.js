import React from 'react';
import { Link } from 'react-router-dom';
import dashboardIcon from '../assets/dashboard (1).png';
import clientsIcon from '../assets/customer.png';
import inboxIcon from '../assets/chat.png';
import logoutIcon from '../assets/log-out.png';
import sidebarLogo from '../assets/logo.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={sidebarLogo} alt="ExPhys Clinic Logo" />
            </div>
            <h2>Welcome Admin!</h2>
            <nav>
                <ul>
                    <li><img src={dashboardIcon} alt="Dashboard" /> <Link to="/admin-dashboard">Dashboard</Link></li>
                    <li><img src={clientsIcon} alt="Clients" /> <Link to="/clients">Clients</Link></li>
                    <li><img src={inboxIcon} alt="Inbox" /> <Link to="/inbox">Inbox</Link></li>
                    <li><img src={logoutIcon} alt="Log Out" /> Log Out</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;